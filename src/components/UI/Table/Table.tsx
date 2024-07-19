import { FC } from 'react';
import './table.scss';

type TTableProps = {
  headers: string[];
  rows: { [key: string]: any }[];
}

const Table: FC<TTableProps> = ({ headers, rows }) => {
  return (
    <div className="container">
        <table className="table">
      <thead className="table__header">
        <tr className="table__header-item">
          {headers.map((header, index) => (
            <th key={index} className="item-cell">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {rows.map((row, rowIndex) => (
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