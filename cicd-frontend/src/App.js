import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>🚀 CI/CD Automation Platform</h1>
        <p>Powered by Jenkins, Docker, Git & Terraform</p>
        <a href="#todo" className="btn">Check To-Do App</a>
      </header>

      <section id="features">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">
            <h3>🔁 Auto Deployment</h3>
            <p>Push code to GitHub, app deploys automatically.</p>
          </div>
          <div className="card">
            <h3>📦 Dockerized</h3>
            <p>All apps run in isolated containers.</p>
          </div>
          <div className="card">
            <h3>⚙️ Managed Infra</h3>
            <p>Provisioned with Terraform on AWS EC2.</p>
          </div>
        </div>
      </section>

      <section id="todo" className="todo-section">
        <h2>📝 To-Do App</h2>
        <div className="todo-box">
          <input 
            type="text" 
            placeholder="Enter task..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <span onClick={() => deleteTask(index)}>❌</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 - Built using React</p>
      </footer>
    </div>
  );
}

export default App;
