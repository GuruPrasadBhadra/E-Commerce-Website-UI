import React, { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar';
import { NewProductFromDataType } from '../../../types/InterFace';

const NewProduct: React.FC = () => {
    const [inputs, setInputs] = useState<NewProductFromDataType>({
        Name: "",
        Price: null,
        Stock: null,
        Catagory: ""
    });

    const [photoPrev, setPhotoPrev] = useState<string>("");
    const [photo, setPhoto] = useState<File>();

    const handelInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

      

        switch (name) {
            case "Name":
                setInputs(prev => {
                    return { ...prev, [name]: value }
                })
                break;
            case "Price":
                setInputs(prev => {
                    return { ...prev, [name]: Number(value) }
                })
                break;
            case "Catagory":
                setInputs(prev => {
                    return { ...prev, [name]: value }
                })
                break;
            case "default":
                setInputs(prev => prev)
        }
    }
    console.log(inputs)

    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];

        const reader: FileReader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setPhotoPrev(reader.result);
                    setPhoto(file);
                }
            };
        }
    };

    return (

        <div className='adminContainer'>
            <AdminSidebar />

            <main className="product-management">
                <article>
                    <form>
                        <h2>New Product</h2>
                        <div>
                            <label>Name</label>
                            <input
                                name="Name"
                                type="text"
                                placeholder="Name"
                                value={inputs.Name}
                                onChange={handelInputs}
                            />
                        </div>
                        <div>
                            <label>Price</label>
                            <input
                                name="Price"
                                type="number"
                                placeholder="Price"
                                value={inputs.Price !== null ? inputs.Price : ""}
                                onChange={handelInputs}
                            />
                        </div>
                        <div>
                            <label>Stock</label>
                            <input
                                name="Stock"
                                type="number"
                                placeholder="Stock"
                                value={inputs.Stock !== null ? inputs.Stock : ""}
                                onChange={handelInputs}
                            />
                        </div>

                        <div>
                            <label>Category</label>
                            <input
                                name="Catagory"
                                type="text"
                                placeholder="eg. laptop, camera etc"
                                value={inputs.Catagory}
                                onChange={handelInputs}
                            />
                        </div>

                        <div>
                            <label>Photo</label>
                            <input type="file" onChange={changeImageHandler} />
                        </div>

                        {photoPrev && <img src={photoPrev} alt="New Image" />}
                        <button type="submit">Create</button>
                    </form>
                </article>
            </main>
        </div>
    );
};

export default NewProduct;
