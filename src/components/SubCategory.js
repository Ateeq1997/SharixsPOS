import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/productlist.css";
import laptopImg from "../assets/images/laptop.jpg";
// import userImg from "../assets/images/user.jpg";

const SubCategory = () => {
  return (
    <div className="product-list-container">
      <h1>Sub Category List</h1>
      <p>Manage your subcategories</p>
      
      {/* Top Buttons */}
      <div className="top-buttons">
        <button className="btn1 pdf"><i className="fa fa-file-pdf-o"></i></button>
        <button className="btn1 xls"><i className="fa fa-file-excel-o"></i></button>
        <button className="btn1 print"><i className="fa fa-print"></i></button>
        <button className="btn1 refresh"><i className="fa fa-refresh"></i></button>
        <button className="btn1 collapse"><i className="fa fa-compress"></i></button>
        <button className="btn1 add-product"><i className="fa fa-plus"></i> Add Sub Category</button>
        {/* <button className="btn1 import-product"><i className="fa fa-download"></i> Import Product</button> */}
      </div>
      
      {/* Search Bar & Filters */}
      <div className="search-filter">
        <input type="text" placeholder="Search" className="search-box" />
        <button className="btn1 filter"><i className="fa fa-filter"></i> Sort by Date</button>
      </div>
      
      {/* Product Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Image</th>
            <th>Category</th>
            <th>Parent Category</th>
            <th>Category Code</th>
            <th>Description</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product" width="40" height="40" /></td>
            <td>Computers</td>
            <td>Computers</td>
            <td>CT001</td>
            <td>Computers Description</td>
            <td>Admin</td>
            {/* <td><img src={userImg} alt="User" width="30" height="30" /></td> */}
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product" width="40" height="40" /></td>
            <td>Computers</td>
            <td>Computers</td>
            <td>CT001</td>
            <td>Computers Description</td>
            <td>Admin</td>
            {/* <td><img src={userImg} alt="User" width="30" height="30" /></td> */}
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product" width="40" height="40" /></td>
            <td>Computers</td>
            <td>Computers</td>
            <td>CT001</td>
            <td>Computers Description</td>
            <td>Admin</td>
            {/* <td><img src={userImg} alt="User" width="30" height="30" /></td> */}
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product" width="40" height="40" /></td>
            <td>Computers</td>
            <td>Computers</td>
            <td>CT001</td>
            <td>Computers Description</td>
            <td>Admin</td>
            {/* <td><img src={userImg} alt="User" width="30" height="30" /></td> */}
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          {/* Add more product rows similarly */}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategory;
