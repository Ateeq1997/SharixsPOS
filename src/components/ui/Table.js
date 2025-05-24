import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Products</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
