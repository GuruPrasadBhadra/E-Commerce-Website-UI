import { Column } from "react-table";
import TableHOC from "./TableHoc";
import { TableDataType } from "../../types/InterFace";

const columns: Column<TableDataType>[] = [
  {
    Header: "Id",
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
];

const DashboardTable = ({ data = [] }: { data: TableDataType[] }) => {
  return TableHOC<TableDataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable;
