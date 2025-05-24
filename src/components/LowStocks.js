import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/lowstocks.css";
import laptopImg from "../assets/images/laptop.jpg";

const LowStocks = () => {
  return (
    <div className="product-list-container">
      <h1>Low Stocks</h1>
      <p>Manage your low Stocks</p>
      <div class="low-stocks-container">
      <button class="low-stocks-btn">Low Stocks</button>
      <button class="out-of-stocks-btn">Out of Stocks</button>
      </div>
      {/* Top Buttons */}
      
      <div className="top-buttons">
      <label class="notify-switch">
    <input type="checkbox" id="notify-checkbox" checked />
    <span class="slider round"></span>
    <span class="notify-text">Notify</span>
</label>

<button class="send-email-btn">
    <i class="fa fa-envelope-o"></i> Send Email
</button>
        <button className="btn1 pdf"><i className="fa fa-file-pdf-o"></i></button>
        <button className="btn1 xls"><i className="fa fa-file-excel-o"></i></button>
        <button className="btn1 print"><i className="fa fa-print"></i></button>
        <button className="btn1 refresh"><i className="fa fa-refresh"></i></button>
        <button className="btn1 collapse"><i className="fa fa-compress"></i></button>
        {/* <button className="btn1 add-product"><i className="fa fa-plus"></i> Add New Product</button>
        <button className="btn1 import-product"><i className="fa fa-download"></i> Import Product</button> */}
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
            <th>Warehouse</th>
            <th>Store</th>
            <th>Product</th>
            <th>Category</th>
            <th>SKU</th>
            <th>Qty</th>
            <th>Qty Alert</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lawish Warehouse</td>
            <td>Crinol</td>
            <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>Laptop</td>
            <td>PT001</td>
            <td>15</td>
            <td>10</td>
            <td className="button-container">
  {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lawish Warehouse</td>
            <td>Crinol</td>
            <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>Laptop</td>
            <td>PT001</td>
            <td>15</td>
            <td>10</td>
            <td className="button-container">
  {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lawish Warehouse</td>
            <td>Crinol</td>
            <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Lenovo 3rd Generation</td>
            <td>Laptop</td>
            <td>PT001</td>
            <td>15</td>
            <td>10</td>
            <td className="button-container">
  {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
  <button className="btn1 edit"><i className="fa fa-edit"></i></button>
  <button className="btn1 delete"><i className="fa fa-trash"></i></button>
</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lawish Warehouse</td>
            <td>Crinol</td>
            <td><img src={laptopImg} alt="Product"  width="40" height="40"  style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
            <td>Laptop</td>
            <td>PT001</td>
            <td>15</td>
            <td>10</td>
            <td className="button-container">
  {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
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

export default LowStocks;
