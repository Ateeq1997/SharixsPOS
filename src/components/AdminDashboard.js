import React from "react";
import '../assets/css/dashboard.css';
import Chart from 'react-apexcharts';
import laptopImg from "../assets/images/laptop.jpg";

const AdminDashboard = () => {
  const chartOptions = {
    chart: { type: 'bar' },
    colors: ['#3498db', '#e74c3c'], // Blue for Purchase, Red for Sales
    xaxis: { 
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: { colors: '#fff', fontSize: '14px', fontWeight: 600 } // X-axis text styling
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#fff', fontSize: '14px', fontWeight: 600 } // Y-axis text styling
      }
    },
    legend: {
      labels: { colors: ['#3498db', '#e74c3c'] }, // Legend colors matching bars
    },
    plotOptions: {
      bar: {
        columnWidth: '40%', // Adjust bar width
        borderRadius: 4 // Rounded edges for bars
      }
    },
    series: [
      { name: 'Purchase', data: [30, 40, 35, 50, 49, 60] },
      { name: 'Sales', data: [20, 30, 40, 35, 50, 49] }
    ]
  };

  return (
    <><div className="dashboard-container">
      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <i className="fa fa-shopping-cart"></i>
          <h2>$307144</h2>
          <p>Total Purchase Due</p>
        </div>
        <div className="card">
          <i className="fa fa-money"></i>
          <h2>$4385</h2>
          <p>Total Sales Due</p>
        </div>
        <div className="card">
          <i className="fa fa-exchange"></i>
          <h2>$385656.5</h2>
          <p>Total Sale Amount</p>
        </div>
        <div className="card">
          <i className="fa fa-arrow-up"></i>
          <h2>$40000</h2>
          <p>Total Expense Amount</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <i className="fa fa-users"></i>
          <h2>100</h2>
          <p>Customers</p>
        </div>
        <div className="info-card">
          <i className="fa fa-truck"></i>
          <h2>110</h2>
          <p>Suppliers</p>
        </div>
        <div className="info-card">
          <i className="fa fa-file"></i>
          <h2>150</h2>
          <p>Purchase Invoice</p>
        </div>
        <div className="info-card">
          <i className="fa fa-file-text"></i>
          <h2>170</h2>
          <p>Sales Invoice</p>
        </div>
      </div>

      {/* Purchase & Sales Chart + Recent Products Table */}
      <div className="row-container">
        <div className="purchase-sales">
          <h2>Purchase & Sales</h2>
          <Chart options={chartOptions} series={chartOptions.series} type="bar" height={300} />
        </div>

        <div className="recent-products">
          <h2>Recent Products</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Products</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lenovo 3rd Generation</td>
                <td>$12500</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bold V3.2</td>
                <td>$1600</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nike Jordan</td>
                <td>$2000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Apple Series 5 Watch</td>
                <td>$800</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Apple Series 5 Watch</td>
                <td>$800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 
      <div className="product-list-container">
        <h4>Expired Products</h4>

        {/* Product Table */}
        <table className="product-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Product</th>
              <th>SKU</th>
              <th>Manufactured Date</th>
              <th>Expired Date</th>
              {/* <th>Price</th>
    <th>Unit</th>
    <th>Qty</th>
    <th>Created by</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
              <td>PT001</td>
              <td>4 August 2024</td>
              <td>20 January 2025</td>
              {/* <td>$12500.00</td>
    <td>Pc</td>
    <td>100</td>
    <td><img src="user1.png" alt="User" /> Arroon</td> */}
              <td className="button-container">
                {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
                <button className="btn1 edit"><i className="fa fa-edit"></i></button>
                <button className="btn1 delete"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
              <td>PT001</td>
              <td>4 August 2024</td>
              <td>20 January 2025</td>
              {/* <td>$12500.00</td>
    <td>Pc</td>
    <td>100</td>
    <td><img src="user1.png" alt="User" /> Arroon</td> */}
              <td className="button-container">
                {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
                <button className="btn1 edit"><i className="fa fa-edit"></i></button>
                <button className="btn1 delete"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
              <td>PT001</td>
              <td>4 August 2024</td>
              <td>20 January 2025</td>
              {/* <td>$12500.00</td>
    <td>Pc</td>
    <td>100</td>
    <td><img src="user1.png" alt="User" /> Arroon</td> */}
              <td className="button-container">
                {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
                <button className="btn1 edit"><i className="fa fa-edit"></i></button>
                <button className="btn1 delete"><i className="fa fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
              <td>PT001</td>
              <td>4 August 2024</td>
              <td>20 January 2025</td>
              {/* <td>$12500.00</td>
    <td>Pc</td>
    <td>100</td>
    <td><img src="user1.png" alt="User" /> Arroon</td> */}
              <td className="button-container">
                {/* <button className="btn1 view"><i className="fa fa-eye"></i></button> */}
                <button className="btn1 edit"><i className="fa fa-edit"></i></button>
                <button className="btn1 delete"><i className="fa fa-trash"></i></button>
              </td>

            </tr>
            {/* Add more product rows similarly */}
          </tbody>
        </table>
      </div></>
  );
};

export default AdminDashboard;
