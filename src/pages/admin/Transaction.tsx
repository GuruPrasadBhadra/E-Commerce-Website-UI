import React,{ReactElement,useState} from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import TableHOC from '../../components/admin/TableHoc'
import { TransactionDataType } from '../../types/InterFace'
import { Link } from 'react-router-dom'
import { Column } from 'react-table'

const arr: Array<TransactionDataType> = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    status: <span className="red">Processing</span>,
    quantity: 3,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },

  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const columns: Column<TransactionDataType>[] = [
  {
    Header: "Avatar",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Transaction:React.FC = () => {
  const [rows, setRows] = useState<TransactionDataType[]>(arr);
  const Table = TableHOC<TransactionDataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Transactions",
   
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

export default Transaction