import React from 'react';

const Navbar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Payroll</li>
        <li>
          <a href="#">Organizations</a>
        </li>
        <li><a href="#">Employees</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><input type="search" placeholder="Search" /></li>
        <li><button type="button" className="button">Search</button></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
