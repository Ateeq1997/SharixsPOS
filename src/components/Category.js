import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/productlist.css";

const Category = () => {
  return (
    <div className="product-list-container">
      <h1>Category</h1>
      <p>Manage your categories</p>
      
      {/* Top Buttons */}
      <div className="top-buttons">
        <button className="btn1 pdf"><i className="fa fa-file-pdf-o"></i></button>
        <button className="btn1 xls"><i className="fa fa-file-excel-o"></i></button>
        <button className="btn1 print"><i className="fa fa-print"></i></button>
        <button className="btn1 refresh"><i className="fa fa-refresh"></i></button>
        <button className="btn1 collapse"><i className="fa fa-compress"></i></button>
        <button className="btn1 add-product"><i className="fa fa-plus"></i> Add New Category</button>
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
            <th>Category</th>
            <th>Category Slug</th>
            <th>Created On</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Laptop</td>
            <td>laptop</td>
            <td>25 May 2023</td>
            <td><span class="status-active">Active</span></td>
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Shoe</td>
            <td>shoe</td>
            <td>5 May 2021</td>
            <td><span class="status-active">Active</span></td>
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Speaker</td>
            <td>speaker</td>
            <td>9 January 2023</td>
            <td><span class="status-active">Active</span></td>
            <td className="button-container">
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Furniture</td>
            <td>furniture</td>
            <td>25 May 2023</td>
            <td><span class="status-active">Active</span></td>
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

export default Category;
