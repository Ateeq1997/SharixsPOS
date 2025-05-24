// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/sidebar.css';

const Sidebar = () => {
 return (
 <aside className="sidebar">
 <ul className="sidebar-menu">
 <li className="sidebar-item">
 <Link to="/admindashboard">
 <i className="fa fa-tachometer"></i> <span>Admin Dashboard</span>
 </Link>
 </li> 
 <li className="sidebar-item">
 <Link to="/salesdashboard">
 <i className="fa fa-line-chart"></i> <span>Sales Dashboard</span>
 </Link>
 </li> 
<li className="sidebar-item">
 <Link to="/productlist">
 <i className="fa fa-cubes"></i> <span>Products</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/addproduct">
 <i className="fa fa-plus-square"></i> <span>Create Product</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/expiredproducts">
 <i className="fa fa-times-circle"></i> <span>Expired Products</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/lowstocks">
 <i className="fa fa-cart-arrow-down"></i> <span>Low Stocks</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/category">
 <i className="fa fa-th-large"></i> <span>Category</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/subcategory">
 <i className="fa fa-sitemap"></i> <span>Sub Category</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/brands">
 <i className="fa fa-tags"></i> <span>Brands</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/units">
 <i className="fa fa-cube"></i> <span>Units</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/tasklist">
 <i className="fa fa-tasks"></i> <span>Task</span>
 </Link>
 </li>
 <li className="sidebar-item">
 <Link to="/leaderboard">
 <i className="fa fa-trophy"></i> <span>Leaderboard</span>
 </Link>
 </li>
</ul>
 </aside>
 );
};

export default Sidebar; 