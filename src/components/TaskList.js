import React from "react";
import "../assets/css/tasklist.css";

const TaskList = () => {
  const tasks = [
    {
      srNo: 1,
      name: "Subscribe our YouTube Channel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
      points: 100.0,
      link: "https://www.youtube.com",
      action: true,
    },
    {
      srNo: 2,
      name: "Follow on Twitter",
       logo: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
      points: 200.0,
      link: "https://x.com",
      action: true,
    },
    {
      srNo: 3,
      name: "Join our Telegram Channel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
      points: 999.0,
      link: "https://t.me",
      action: false,
    },
    {
      srNo: 4,
      name: "Follow on Instagram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
      points: 1000.0,
      link: "https://www.instagram.com",
      action: true,
    },
    {
      srNo: 5,
      name: "Follow on TikTok",
      logo: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png", // Flaticon URL
      points: 1000.0,
      link: "https://www.tiktok.com",
      action: true,
    },
  ];

  return (
    <div className="task-list-container">
      <div className="add-button">
        <span>+</span>
      </div>
      <h1 className="task-list-title">Task List</h1>
      <table className="task-list-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Logo</th>
            <th>Total Points</th>
            <th>Redirection Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.srNo}>
              <td>{task.srNo}</td>
              <td>{task.name}</td>
              <td>
                <img src={task.logo} alt={task.name} className="task-logo" />
              </td>
              <td>{task.points.toFixed(2)}</td>
              <td>
                <a href={task.link} target="_blank" rel="noopener noreferrer">
                  {task.link}
                </a>
              </td>
              <td>
                <div className="action-buttons">
                <button className="edit-btn">
  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
</button>
                  <label className="switch">
                    <input type="checkbox" checked={task.action} readOnly />
                    <span className="slider round"></span>
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
