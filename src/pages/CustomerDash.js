import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

const CustomerDash = () => {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOption, setSortOption] = useState('reset'); // Initial sorting option
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    // Simulated fetch or setting of data (replace with actual data fetching if needed)
    const fetchData = () => {
      // Replace this with your actual data fetching mechanism (e.g., API call)
      const data = [
        { "id": 1, "name": "John Doe", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy A", "status": "Active" },
        { "id": 2, "name": "Jane Smith", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy B", "status": "Inactive" },
        { "id": 3, "name": "Alice Johnson", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy C", "status": "Active" },
        { "id": 4, "name": "Bob Brown", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy D", "status": "Active" },
        { "id": 5, "name": "Eve Green", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy E", "status": "Inactive" },
        { "id": 6, "name": "Charlie White", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy F", "status": "Active" },
        { "id": 7, "name": "Grace Lee", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy G", "status": "Inactive" },
        { "id": 8, "name": "Henry Davis", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy H", "status": "Active" },
        { "id": 9, "name": "Olivia Moore", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy I", "status": "Active" },
        { "id": 10, "name": "William Wilson", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy J", "status": "Inactive" },
        { "id": 11, "name": "Sophia Martinez", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy K", "status": "Active" },
        { "id": 12, "name": "Liam Anderson", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy L", "status": "Active" },
        { "id": 13, "name": "Emma Hernandez", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy M", "status": "Inactive" },
        { "id": 14, "name": "James Gonzalez", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy N", "status": "Active" },
        { "id": 15, "name": "Ava Perez", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy O", "status": "Active" },
        { "id": 16, "name": "Logan Ramirez", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy P", "status": "Inactive" },
        { "id": 17, "name": "Mia Flores", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy Q", "status": "Active" },
        { "id": 18, "name": "Noah Cruz", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy R", "status": "Active" },
        { "id": 19, "name": "Isabella Rivera", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy S", "status": "Inactive" },
        { "id": 20, "name": "Elijah Torres", "nationality": "Thai", "insurer": "KSLI", "policy": "Policy T", "status": "Active" }
      ];
      setItems(data);
      setSortedItems(data); // Initialize sortedItems with the fetched data
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Sorting functions (sortByActive, sortByInactive, resetSort) go here
  const sortByActive = () => {
    const sorted = [...items].filter(item => item.status === 'Active');
    setSortedItems(sorted);
    setSortOption('active');
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  const sortByInactive = () => {
    const sorted = [...items].filter(item => item.status === 'Inactive');
    setSortedItems(sorted);
    setSortOption('inactive');
    setCurrentPage(1); // Reset current page to 1 after sorting
  };

  const resetSort = () => {
    setSortedItems(items); // Show all items without sorting
    setSortOption('reset');
    setCurrentPage(1); // Reset current page to 1 after resetting
  };

  // Search functionality
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page to 1 when search term changes
  };

  // Filter items based on search term and sort option
  const filteredItems = sortedItems.filter(item =>
    (sortOption === 'active' && item.status === 'Active') ||
    (sortOption === 'inactive' && item.status === 'Inactive') ||
    (sortOption === 'reset' && (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term if reset option
      // Add more fields to search by (e.g., nationality, policy, etc.) if needed
    ))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="full-width-screen padding-given">
      <div className="row" style={{ margin: "18px 0px" }}>
        <div className='justify-content-between d-flex'>
          <div>
            <h1 className='main-heading'>Customer Dashboard</h1>
            <span>Manage Client Data</span>
          </div>
          <div>
            <div className='cust-grey-button d-flex'>
              <button className='btn-grey' style={{ margin: '30px 0px' }}>Export Data</button>
              <button className='btn-grey' style={{ margin: '30px 8px' }}>Upload CSV</button>
              <Link to={"/create-customer"}><button className='btn-grey' style={{ margin: '30px 0px' }}>Create Customer</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-12'>
          <form className="d-flex">
            <input
              style={{ borderRadius: "15px", padding: "8px 16px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className='col-lg-6 col-md-6 col-12' style={{ display: "flex", justifyContent: "end" }}>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by: {sortOption === 'active' ? 'Active' : sortOption === 'inactive' ? 'Inactive' : 'Reset'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><button className="dropdown-item" onClick={sortByActive}>Active</button></li>
              <li><button className="dropdown-item" onClick={sortByInactive}>Inactive</button></li>
              <li><button className="dropdown-item" onClick={resetSort}>Reset</button></li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <Table items={currentItems} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDash;
