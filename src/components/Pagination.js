// Pagination.js
import React, { useState, useEffect } from 'react';
import jsonData from '../JsonFolder.js/data.json'; // Import JSON data
import Table from './Table'; // Import the Table component

const itemsPerPage = 5; // Number of items to display per page

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setData(jsonData); // Set initial data from JSON file
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(data.slice(startIndex, endIndex));
  }, [currentPage, data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
     

      <Table items={currentItems} /> 

      <nav>
        <ul className="pagination" style={{justifyContent:"center"}}>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
