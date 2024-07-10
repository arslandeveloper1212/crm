
import React from 'react';

const Table = ({ items }) => {
 
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "25%" }} scope="col">Id</th>
            <th style={{ width: "25%" }} scope="col">Name</th>
            <th style={{ width: "25%" }} scope="col">Policy</th>
            <th style={{ width: "25%" }} scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.policy}</td>
              <td>
                <button className={`btn ${item.status === 'Active' ? 'btn-active' : 'btn-danger'}`}>{item.status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
