import React from 'react';
import data from '../JsonFolder.js/Sidebarjson';
import '../../src/App.css';
const Sidebar = () => {
  return (
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
            <ul>
              {folder.children.map((child, childIndex) => (
                <li className='li-side' key={childIndex}>{child.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
