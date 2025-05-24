
import React from "react";
import "../assets/css/userstable.css";

const Units = () => {
  const users = [
    {
      srNo: 1,
      userName: "Raymdf",
      totalPoints: "12264.00",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50", // Replace with actual image URL
      joinedDate: "Monday, December 16, 2024 at 1:21:30 PM",
    },
    {
      srNo: 2,
      userName: "gbp168",
      totalPoints: "0",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50",
      joinedDate: "Tuesday, December 10, 2024 at 11:51:50 PM",
    },
    {
      srNo: 3,
      userName: "user17336767350",
      totalPoints: "0",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50",
      joinedDate: "Sunday, December 8, 2024 at 10:22:17 PM",
    },
    {
      srNo: 4,
      userName: "meetbuilds",
      totalPoints: "0",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50",
      joinedDate: "Friday, December 6, 2024 at 9:10:48 PM",
    },
    {
      srNo: 5,
      userName: "rajat_kumar_77",
      totalPoints: "0",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50",
      joinedDate: "Tuesday, November 19, 2024 at 10:36:20 AM",
    },
    {
      srNo: 6,
      userName: "user17316206730",
      totalPoints: "0",
      totalReferrals: 0,
      profileImg: "https://via.placeholder.com/50",
      joinedDate: "Friday, November 15, 2024 at 11:10:18 PM",
    },
   
  ];

  return (
    <div className="users-table-container">
      <h1>Users</h1>
      <div className="search-bar">
  <i className="fa fa-search"></i>
   <input type="text" placeholder="Search..." />
</div>
      <table className="users-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>User Name</th>
            <th>Total Points</th>
            <th>Total Referrals</th>
            <th>Profile</th>
            <th>Joined Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.srNo}>
              <td>{user.srNo}</td>
              <td>{user.userName}</td>
              <td>{user.totalPoints}</td>
              <td>{user.totalReferrals}</td>
              <td>
                <img
                  src={user.profileImg}
                  alt="Profile"
                  className="profile-img"
                />
              </td>
              <td>{user.joinedDate}</td>
              <td>
                <button className="action-btn">
                  <i className="fa fa-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
document.body.style.overflow = "auto"; // Enable vertical scrolling
document.body.style.overflowX = "hidden"; // Disable horizontal scrolling

export default Units;
