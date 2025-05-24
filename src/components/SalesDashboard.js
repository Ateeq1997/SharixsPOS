import React, { useState } from "react";
import "../assets/css/salesdashboard.css";
import laptopImg from "../assets/images/laptop.jpg";
import { FaMoneyBillTrendUp, FaChartBar } from "react-icons/fa6";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";
import WorldMap from "react-svg-worldmap";


const SalesDashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState("02/17/2025 - 02/17/2025");
  
    const dateRanges = [
      "Today",
      "Yesterday",
      "Last 7 Days",
      "Last 30 Days",
      "This Month",
      "Last Month",
      "Custom Range"
    ];
    const salesData = [
      { name: "Jan", sales: 25000 },
      { name: "Feb", sales: 35000 },
      { name: "Mar", sales: 6000 },
      { name: "Apr", sales: 20000 },
      { name: "May", sales: 27000 },
      { name: "Jun", sales: 6000 },
      { name: "Jul", sales: 25000 },
      { name: "Aug", sales: 8000 },
      { name: "Sep", sales: 35000 },
      { name: "Jan", sales: 15000 },
      { name: "Feb", sales: 35000 },
      { name: "Mar", sales: 10000 },
      { name: "Apr", sales: 32000 },
      { name: "May", sales: 27000 },
      { name: "Jun", sales: 6000 },
      { name: "Jul", sales: 15000 },
      { name: "Aug", sales: 28000 },
      { name: "Sep", sales: 15000 },
    ];
    
    const salesByCountry = [
      { country: "us", value: 500 },  // USA
      { country: "cn", value: 400 },  // China
      { country: "ru", value: 300 },  // Russia
      { country: "de", value: 200 },  // Germany
      { country: "fr", value: 150 },  // France
      { country: "gb", value: 180 },  // United Kingdom
      { country: "in", value: 250 },  // India
      { country: "br", value: 220 },  // Brazil
      { country: "jp", value: 280 },  // Japan
      { country: "ca", value: 260 },  // Canada
      { country: "au", value: 190 },  // Australia
      { country: "es", value: 170 },  // Spain
      { country: "it", value: 160 },  // Italy
      { country: "mx", value: 140 },  // Mexico
      { country: "za", value: 120 },  // South Africa
    ];
    
  return (
    <div className="dashboard-container1">
        <header className="dashboard-header">
        <h2>👋 Hi <span className="bold">Aqib Baloch</span>, here's your store today.</h2>
        <div className="date-picker-container">
          <div className="date-picker" onClick={() => setShowDropdown(!showDropdown)}>
            📅 {selectedDateRange}
          </div>
          {showDropdown && (
            <ul className="date-dropdown" onClick={(e) => e.stopPropagation()}>
              {dateRanges.map((range, index) => (
                <li key={index} onClick={() => { setSelectedDateRange(range); setShowDropdown(false); }}>
                  {range}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
      
      <section className="stats-container">
      <div className="stat-card earning">
  <div className="icon">
    <FaMoneyBillTrendUp size={55} color="#4278f5" />
  </div>
  <h3>Weekly Earning</h3>
  <h1>$95000.45</h1>
  <h6 className="increase">⬆ 48% increase compared to last week</h6>
</div>

<div className="stat-card total-sales">
  <div className="icon">
    <FaChartBar size={55} color="#4278f5" />
  </div>
  <h3>No of Total Sales</h3>
  <h1>10000</h1>
</div>

      </section>
      
      <section className="content-container">
        <div className="best-seller">
          <h4>Best Seller <span className="view-all">View All →</span></h4>
          <tr>
  <td style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img 
      src={laptopImg} 
      alt="Product" 
      style={{ width: '50px', height: '50px' }} 
    />
    <span>Lenovo 3rd Generation</span>
    <span style={{ marginLeft: '12vw' }}>PT001</span>
  </td>
</tr>
<tr>
  <td style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img 
      src={laptopImg} 
      alt="Product" 
      style={{ width: '50px', height: '50px' }} 
    />
    <span>Lenovo 3rd Generation</span>
    <span style={{ marginLeft: '12vw' }}>PT001</span>
  </td>
</tr>
<tr>
  <td style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img 
      src={laptopImg} 
      alt="Product" 
      style={{ width: '50px', height: '50px' }} 
    />
    <span>Lenovo 3rd Generation</span>
    <span style={{ marginLeft: '12vw' }}>PT001</span>
  </td>
</tr>
<tr>
  <td style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img 
      src={laptopImg} 
      alt="Product" 
      style={{ width: '50px', height: '50px' }} 
    />
    <span>Lenovo 3rd Generation</span>
    <span style={{ marginLeft: '12vw' }}>PT001</span>
  </td>
</tr>
<tr>
  <td style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <img 
      src={laptopImg} 
      alt="Product" 
      style={{ width: '50px', height: '50px'}} 
    />
    <span>Lenovo 3rd Generation</span>
    <span style={{ marginLeft: '12vw' }}>PT001</span>
  </td>
</tr>
        </div>
        
        <div className="recent-products" style={{width: '65%',}}>
          <h4>Recent Transactions <span className="view-all">View All →</span></h4>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Order Details</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
                <td>Paypal #416645453773</td>
                <td>-</td>
                <td>$1,099.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
                <td>Paypal #416645453773</td>
                <td>-</td>
                <td>$1,099.00</td>
              </tr>
              <tr>
                <td>3</td>
               <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
                <td>Paypal #416645453773</td>
                <td>-</td>
                <td>$1,099.00</td>
              </tr>
              <tr>
                <td>4</td>
               <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
                <td>Paypal #416645453773</td>
                <td>-</td>
                <td>$1,099.00</td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src={laptopImg} alt="Product" width="40" height="40" style={{ verticalAlign: 'middle', marginRight: '8px' }} />  Lenovo 3rd Generation</td>
                <td>Paypal #416645453773</td>
                <td>-</td>
                <td>$1,099.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="dashboard-container2">
      {/* Sales Analytics Chart */}
      <div className="card">
        <h2 className="card-title">Sales Analytics</h2>
        <ResponsiveContainer width="100%" height={420}>
  <LineChart data={salesData}>
    <defs>
      <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFA500" stopOpacity={0.6} />  {/* Darker at the top */}
        <stop offset="100%" stopColor="#FFA500" stopOpacity={0.1} /> {/* Lighter at the bottom */}
      </linearGradient>
    </defs>
    
    <XAxis dataKey="name" tick={{ fill: "white" }} />
    <YAxis tick={{ fill: "white" }} />
    <Tooltip contentStyle={{ backgroundColor: "black", color: "white" }} />
    
    <Area 
      type="monotone" 
      dataKey="sales" 
      stroke="#FFA500" 
      fill="url(#salesGradient)" /* Apply gradient fill */
    />
    
    <Line type="monotone" dataKey="sales" stroke="#FFA500" strokeWidth={3} />
  </LineChart>
</ResponsiveContainer>

      </div>

      {/* Sales by Countries Map */}
      <div className="card1">
        <div className="card-header">
          <h2 className="card-title">Sales By Countries</h2>
          <button className="week-btn">This Week</button>
        </div>
        <WorldMap 
  className="worldmap-container"
  value-suffix=" sales" 
  size="responsive" 
  data={salesByCountry} 
/>
        <p className="growth-text">▲ 48% increase compared to last week</p>
      </div>
    </div>
    </div>
  );
};

export default SalesDashboard;
