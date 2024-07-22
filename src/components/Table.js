
import React from 'react';
import { FaEye } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
const Table = ({ items }) => {
 console.log(items);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th  scope="col">Id</th>
            <th  scope="col">Name</th>
            <th  scope="col">Nationality</th>
            <th  scope="col">Insurer</th>
            
            <th  scope="col">Policy</th>
            <th  scope="col">Status</th>
            <th  scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.nationality}</td>
              <td>{item.insurer}</td>
              <td>{item.policy}</td>
              
              <td>
                <button className={`btn ${item.status === 'Active' ? 'btn-active' : 'btn-danger'}`}>{item.status}</button>
              </td>
              <div className='gap-30'>
              <td><FaEye /></td>
              <td><TiEdit /></td>
              <td><RiDeleteBin6Line /></td>
              </div>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
