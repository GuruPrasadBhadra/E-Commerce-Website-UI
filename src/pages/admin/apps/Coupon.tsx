import React,{useState} from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";


const Coupon: React.FC = () => {
  const [size, setSize] = useState<number>(8);
  const [couponText, setCouponText] = useState<string>("");
  const [coupon, setCoupon] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    let CouponText:string=couponText || ""
    if(!includeNumbers && !includeCharacters && !includeSymbols){
     return alert("Please select at least one")
    }

    const Length=Number(size-couponText.length)
 
    for(let i=0;i<Length;i++){
      let entireCouponText:string=""
      if (includeCharacters) entireCouponText += allLetters;
      if (includeNumbers) entireCouponText += allNumbers;
      if (includeSymbols) entireCouponText += allSymbols;
      const randomNum:number=~~(Math.random()*entireCouponText.length)
      CouponText+=entireCouponText[randomNum]
     
    }
    setCoupon(CouponText)
    setIsCopied(false)

  }

  const copyText=async (coupon:string)=>{
   await navigator.clipboard.writeText(coupon)
   setIsCopied(true)
  }


  return (
    <div className='adminContainer'>
      <AdminSidebar />

      <main className="dashboard-app-container">
      <h1>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={couponText}
              onChange={(e) => setCouponText(e.target.value)}
              maxLength={size}
            />

            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
              />
              <span>Numbers</span>

              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters((prev) => !prev)}
              />
              <span>Characters</span>

              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </main>
    </div>
  )
}

export default Coupon