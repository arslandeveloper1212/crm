import React from 'react';
import data from '../JsonFolder.js/Sidebarjson'; // Assuming you've imported the data object
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className='custom-width-first'>
    <div className='broker-content'>
      <img src={data.top.logo.link} alt="Logo" style={{ width: '50px', height: '50px' }} />
      <div className='d-flex flex-column'>
        <span>{data.top.logo.leftText}</span>
        <strong>{data.top.logo.rightText}</strong>
      </div>
    </div>
    <div>
      {data.home.folders.map((folder, index) => (
        <div key={index}>
          <span className='name-side'>{folder.name}</span>
          {folder.children ? (
            <ul>
              {folder.children.map((child, childIndex) => (
                <li className='li-side' key={childIndex}>
                  <Link style={{textDecoration:"none", color:"#7C7C7C"}} to={child.link}>{child.name}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
