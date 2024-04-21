import React from 'react';
import { useTable,TableOptions,Column,useSortBy,usePagination  } from 'react-table';
import {
    AiOutlineSortAscending,
    AiOutlineSortDescending,
  } from "react-icons/ai";

function TableHOC<T extends Object>(
  
    columns: Column<T>[],
    data: T[],
    containerClassname: string,
    heading: string,
    showPagination: boolean = false
  ) {
    console.log("table")
    return function HOC() {

      const options: TableOptions<T> = {
        columns,
        data,
        initialState: {
          pageSize: 4,
        },
      };
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        pageCount,
        state: { pageIndex },
        previousPage,
        canNextPage,
        canPreviousPage,
      } = useTable(options,useSortBy,usePagination);
  
      return (
        <div className={containerClassname}>
          <h2 className="heading">{heading}</h2>
  
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      {column.isSorted && (
                      <span>
                        {" "}
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row:any) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell:any) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
        </div>
      );
    };
  }
  
  export default TableHOC;
  