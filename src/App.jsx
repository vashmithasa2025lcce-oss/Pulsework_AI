
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Review AI annotations",
      project: "Image Labeling",
      assigned: "RK",
      status: "Completed",
    },
    {
      id: 2,
      name: "Validate dataset",
      project: "Speech to Text",
      assigned: "SP",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Update evaluation script",
      project: "Model QA",
      assigned: "AK",
      status: "Pending",
    },
    {
      id: 4,
      name: "Prepare QBR report",
      project: "DC Reporting",
      assigned: "VK",
      status: "In Progress",
    },
    {
      id: 5,
      name: "Sync logs to database",
      project: "Data Pipeline",
      assigned: "NK",
      status: "Pending",
    },
  ]);

  const projects = [
    {
      name: "Image Labeling",
      members: "8 members",
      progress: 75,
      color: "#8272ed",
    },
    {
      name: "Speech to Text",
      members: "4 members",
      progress: 60,
      color: "#38a6c8",
    },
    {
      name: "Model QA",
      members: "5 members",
      progress: 45,
      color: "#e58ab2",
    },
    {
      name: "DC Reporting",
      members: "3 members",
      progress: 85,
      color: "#39b69a",
    },
    {
      name: "Data Pipeline",
      members: "6 members",
      progress: 55,
      color: "#55a7c5",
    },
  ];

  const filteredTasks = tasks.filter((task) =>
    `${task.name} ${task.project} ${task.assigned} ${task.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="app-layout">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        {/* Header */}
        <header className="top-header">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <button className="header-icon" aria-label="Notifications">
              ♧
            </button>

            <div className="profile">
              <div className="profile-avatar">P</div>
              <div>
                <strong>John</strong>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        {activePage === "Dashboard" ? (
          <>
            <section className="welcome-section">
              <div>
                <h1>Welcome back, Vashmitha S A 👋</h1>
                <p>
                  Here's what's happening at PulseWorks AI today.
                </p>
              </div>

              <span className="today-date">
                Wednesday, Nov 25, 2026
              </span>
            </section>

            {/* Statistics */}
            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon purple">▣</div>
                <div>
                  <p>Total Projects</p>
                  <h2>24</h2>
                  <small>Across all teams</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon blue">☷</div>
                <div>
                  <p>Total Tasks</p>
                  <h2>1,248</h2>
                  <small>All assigned tasks</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">♧</div>
                <div>
                  <p>Active Members</p>
                  <h2>18</h2>
                  <small>Team members</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">◷</div>
                <div>
                  <p>Pending Tasks</p>
                  <h2>{pendingTasks + 94}</h2>
                  <small>Needs attention</small>
                </div>
              </div>
            </section>

            {/* Dashboard content */}
            <section className="dashboard-grid">

              {/* Recent Tasks */}
              <div className="content-card recent-tasks">
                <div className="card-heading">
                  <div>
                    <h3>Recent Tasks</h3>
                    <p>Track your team's latest activities</p>
                  </div>
                  <button
                    onClick={() => setActivePage("Tasks")}
                    className="view-all"
                  >
                    View All →
                  </button>
                </div>

                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Project</th>
                        <th>Assignee</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredTasks.map((task) => (
                        <tr key={task.id}>
                          <td>
                            <label className="task-label">
                              <input
                                type="checkbox"
                                checked={task.status === "Completed"}
                                onChange={() => toggleTask(task.id)}
                              />
                              <span
                                className={
                                  task.status === "Completed"
                                    ? "completed-text"
                                    : ""
                                }
                              >
                                {task.name}
                              </span>
                            </label>
                          </td>

                          <td>{task.project}</td>
                          <td>
                            <span className="assignee">
                              {task.assigned}
                            </span>
                          </td>

                          <td>
                            <span
                              className={`status ${task.status
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {task.status}
                            </span>
                          </td>
                        </tr>
                      ))}

                      {filteredTasks.length === 0 && (
                        <tr>
                          <td colSpan="4" className="empty-result">
                            No matching tasks found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="task-summary">
                  {completedTasks} of {tasks.length} sample tasks completed
                </p>
              </div>

              {/* Active Projects */}
              <div className="content-card active-projects">
                <div className="card-heading">
                  <div>
                    <h3>Active Projects</h3>
                    <p>Project progress overview</p>
                  </div>
                  <button
                    onClick={() => setActivePage("Projects")}
                    className="view-all"
                  >
                    View All →
                  </button>
                </div>

                <div className="project-list">
                  {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                      <div className="project-top">
                        <div className="project-info">
                          <span
                            className="project-dot"
                            style={{ background: project.color }}
                          ></span>

                          <div>
                            <h4>{project.name}</h4>
                            <small>{project.members}</small>
                          </div>
                        </div>

                        <strong>{project.progress}%</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${project.progress}%`,
                            background: project.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="other-page">
            <h1>{activePage}</h1>
            <p>
              Welcome to the PulseWorks {activePage} section.
            </p>

            {activePage === "Tasks" && (
              <div className="content-card">
                <h3>All Tasks</h3>
                {tasks.map((task) => (
                  <div className="simple-task" key={task.id}>
                    <span>{task.name}</span>
                    <span>{task.project}</span>
                    <span className="status">
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activePage === "Projects" && (
              <div className="content-card">
                <h3>All Projects</h3>
                {projects.map((project) => (
                  <div className="simple-task" key={project.name}>
                    <span>{project.name}</span>
                    <span>{project.members}</span>
                    <strong>{project.progress}%</strong>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        <footer className="footer">
          © 2026 PulseWorks. All rights reserved.
          <span>Built for smarter teamwork.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
