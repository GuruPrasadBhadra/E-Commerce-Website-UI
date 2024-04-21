import React,{useState} from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { UserDataType } from '../../types/InterFace'
import { Column } from 'react-table';
import { FaTrash } from "react-icons/fa";
import TableHOC from '../../components/admin/TableHoc';

const columns: Column<UserDataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: Array<UserDataType> = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const User:React.FC = () => {
  const [rows, setRows] = useState<UserDataType[]>(arr);

  const Table = TableHOC<UserDataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
   
  )();
  return (
    <>
       {/* SIDEBAR */}
       <div className='adminContainer'>
        <AdminSidebar />
        {/* main */}
        <main>
         {Table}
        </main>
      </div>
    </>
  )
}

export default User