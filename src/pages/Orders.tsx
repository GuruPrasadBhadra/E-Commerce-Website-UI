import React, { useEffect, useState } from 'react'
import { OrdersDataType } from '../types/UserTypes';
import { Column } from 'react-table';
import TableHOC from '../components/admin/TableHoc';
import { Link } from 'react-router-dom';
const order = [
    {
        _id: "kkshdcjdh",
        amount: 45554,
        discount: 5656,
        quantity: 23,
        status: <span className='red'>Processing</span>,
        action: <Link to={`/order/kkshdcjdh`}>Manage</Link>,
    }
]

const columns: Column<OrdersDataType>[] = [
    {
        Header: "ID",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
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

const UserOrders:React.FC = () => {
    const [rows, setRows] = useState<OrdersDataType[]>(order)
   
    const table = TableHOC(columns, rows, "dashboard-product-box",
        "Orders", rows.length>4)()

    return (
        <>
            <div className="container">
                <h1>My Orders</h1>
                {table}
            </div>
        </>
    )
}

export default UserOrders