import React from "react";
import "../assets/css/leaderboard.css";

const App = () => {
  const leaderboardData = [
    {
      rank: 1,
      username: "survaseshubham",
      referrals: 18,
      profile: "https://via.placeholder.com/50"
    },
    {
      rank: 2,
      username: "peinshinoda1983",
      referrals: 15,
      profile: "https://via.placeholder.com/50"
    },
    {
      rank: 3,
      username: "Krisjurist",
      referrals: 6,
      profile: "https://via.placeholder.com/50"
    },
    {
      rank: 4,
      username: "nasher76",
      referrals: 3,
      profile: "https://via.placeholder.com/50"
    },
    {
      rank: 5,
      username: "akshay236",
      referrals: 1,
      profile: "https://via.placeholder.com/50"
    },
    {
      rank: 6,
      username: "VidyaGond",
      referrals: 1,
      profile: "https://via.placeholder.com/50"
    }
  ];

  return (
    <div className="users-table-container">
      <h1>Leaderboard</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>User Name</th>
            <th>Total Referrals</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user) => (
            <tr key={user.rank}>
              <td>{user.rank}</td>
              <td>{user.username}</td>
              <td>{user.referrals}</td>
              <td>
                <img
                  src={user.profile}
                  alt="Profile"
                  className="profile-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
