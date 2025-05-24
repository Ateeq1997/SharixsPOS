import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import SalesDashboard from './components/SalesDashboard';
import Units from './components/Units';
import TaskList from './components/TaskList';
import LeaderBoard from './components/LeaderBoard';
import LoginPage from './components/LoginPage';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ExpiredProducts from './components/ExpiredProducts';
import LowStocks from './components/LowStocks';
import Category from './components/Category';
import SubCategory from './components/SubCategory';
import Brands from './components/Brands';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
        <div className="app-body">
          {isAuthenticated && <Sidebar />}
          <div className="main-content-container">
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/admindashboard" /> : <LoginPage onLogin={() => setIsAuthenticated(true)} />}
              />
              <Route path="/forget-password" element={<ForgetPasswordPage />} />
              <Route
                path="/admindashboard"
                element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />}
              />
                <Route
                path="/salesdashboard"
                element={isAuthenticated ? <SalesDashboard /> : <Navigate to="/" />}
              />
              <Route
                path="/units"
                element={isAuthenticated ? <Units /> : <Navigate to="/" />}
              />
              <Route
                path="/tasklist"
                element={isAuthenticated ? <TaskList /> : <Navigate to="/" />}
              />
              <Route
                path="/leaderboard"
                element={isAuthenticated ? <LeaderBoard /> : <Navigate to="/" />}
              />
               <Route
                path="/productlist"
                element={isAuthenticated ? <ProductList /> : <Navigate to="/" />}
              />
              <Route
                path="/addproduct"
                element={isAuthenticated ? <AddProduct /> : <Navigate to="/" />}
              />
               <Route
                path="/expiredproducts"
                element={isAuthenticated ? <ExpiredProducts /> : <Navigate to="/" />}
              />
               <Route
                path="/lowstocks"
                element={isAuthenticated ? <LowStocks /> : <Navigate to="/" />}
              />
               <Route
                path="/category"
                element={isAuthenticated ? <Category /> : <Navigate to="/" />}
              />
              <Route
                path="/subcategory"
                element={isAuthenticated ? <SubCategory /> : <Navigate to="/" />}
              />
                <Route
                path="/brands"
                element={isAuthenticated ? <Brands /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};


export default App;
