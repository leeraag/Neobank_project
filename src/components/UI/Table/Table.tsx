import { FC, useState, useCallback } from 'react';
import './table.scss';
import sort from '@assets/icons/sort.svg'

type TTableProps = {
  headers: { key: any; label: string }[];
  rows: { [key: string]: any }[];
}


const Table: FC<TTableProps> = ({ headers, rows }) => {
  type Data = typeof rows;
  type SortKeys = keyof Data[0];
  type SortOrder = "ascn" | "desc"; // порядок сортировки
  const [sortKey, setSortKey] = useState<SortKeys>("number");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  type TSort = {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  };

  const sortData = ({ tableData, sortKey, reverse }: TSort) => {
    if (!sortKey) return tableData;
    const sortedData = tableData.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });
    if (reverse) {
        return sortedData.reverse();
    }
    return sortedData;
  };

  const sortedData = useCallback(() => 
    sortData({ 
      tableData: rows, sortKey, reverse: sortOrder === "desc" 
    }),
    [rows, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  }

  return (
    <div className="container">
        <table className="table">
      <thead className="table__header">
        <tr className="table__header-item">
          {headers.map((header) => {
            return (
              <th key={header.key} className="item-cell">
                <button onClick={() => changeSort(header.key)} className="sortingBtn">
                  {header.label}
                  <img src={sort} alt="sort" className={`${
                    sortKey === header.key && sortOrder === "desc"
                      ? "sort-top sort-bottom"
                      : "sort-top"
                  }`}/>
                </button>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="table__body">
        {sortedData().map((row, rowIndex) => (
          <tr key={rowIndex} className="table__body-row">
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="row-cell">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export { Table };
