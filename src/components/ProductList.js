import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/productlist.css";
import laptopImg from "../assets/images/laptop.jpg";
 import userImg from "../assets/images/user.jpg";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      <p>Manage your products</p>
      
      {/* Top Buttons */}
      <div className="top-buttons">
        <button className="btn1 pdf"><i className="fa fa-file-pdf-o"></i></button>
        <button className="btn1 xls"><i className="fa fa-file-excel-o"></i></button>
        <button className="btn1 print"><i className="fa fa-print"></i></button>
        <button className="btn1 refresh"><i className="fa fa-refresh"></i></button>
        <button className="btn1 collapse"><i className="fa fa-compress"></i></button>
        <button className="btn1 add-product"><i className="fa fa-plus"></i> Add New Product</button>
        <button className="btn1 import-product"><i className="fa fa-download"></i> Import Product</button>
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
            <th>Product</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Qty</th>
            <th>Created by</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product" c  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>PT001</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>$12500.00</td>
            <td>Pc</td>
            <td>100</td>
            <td><img src={userImg} alt="Product"  width="40" height="40"  /></td>
            <td className="button-container">
  <button className="btn1 view"><i className="fa fa-eye"></i></button>
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
           <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>PT001</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>$12500.00</td>
            <td>Pc</td>
            <td>100</td>
            <td><img src={userImg} alt="Product"  width="40" height="40"  /></td>
            <td className="button-container">
  <button className="btn1 view"><i className="fa fa-eye"></i></button>
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>PT001</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>$12500.00</td>
            <td>Pc</td>
            <td>100</td>
            <td><img src={userImg} alt="Product"  width="40" height="40"  /></td>
            <td className="button-container">
  <button className="btn1 view"><i className="fa fa-eye"></i></button>
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
          <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>PT001</td>
            <td>Laptop</td>
            <td>Lenovo</td>
            <td>$12500.00</td>
            <td>Pc</td>
            <td>100</td>
            <td><img src={userImg} alt="Product"  width="40" height="40"  /></td>
            <td className="button-container">
  <button className="btn1 view"><i className="fa fa-eye"></i></button>
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

export default ProductList;
