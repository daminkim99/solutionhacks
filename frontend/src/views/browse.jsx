import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Browse() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOtherTasks = async () => {
      const currentUserEmail = localStorage.getItem('userEmail');
      if (!currentUserEmail) {
        setError("You must be logged in to view tasks.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/other-tasks?email=${currentUserEmail}`);
        setTasks(response.data.tasks);
      } catch (err) {
        console.error("Error fetching other users' tasks:", err);
        setError("Failed to load available tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchOtherTasks();
  }, []);

  const handleAccept = (taskId) => {
    console.log(`Accepted task ${taskId}`);
    // Future logic to handle accepting a task
    alert('Task accepted!');
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: `'Cascadia Code', 'Cascadia Code', Cascadia Code`
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ color: '#000000', fontWeight: 600, fontSize: '2.9rem', margin: 0 }}>
          Available Tasks
        </h1>
        <button style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#000000',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '1.2rem',
          boxShadow: '0 3px 8px rgba(0,0,0,0.3)'
        }}
          onClick={() => navigate('/home')}>
          My Tasks
        </button>
      </div>

      {loading && <p>Loading available tasks...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {!loading && !error && tasks.length === 0 ? (
          <p>No other tasks are available right now.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.task_id}
              style={{
                backgroundColor: '#8cbdb2',
                width: '240px',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`
              }}
            >
              <div style={{
                backgroundColor: '#ffffff',
                color: '#333',
                fontWeight: 600,
                padding: '0.3rem 0.7rem',
                borderRadius: '12px',
                alignSelf: 'flex-start',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                Request: {task.task}
              </div>
              <div style={{ color: '#000000', fontSize: '0.88rem', lineHeight: '1.6' }}>
                <p><strong>Posted By:</strong><br />{task.creator_name}</p>
                <p><strong>Address:</strong><br />{task.address}</p>
                <p><strong>Date:</strong><br />{task.date}</p>
                <p><strong>Description:</strong><br />{task.description}</p>
              </div>
              <button
                onClick={() => handleAccept(task.task_id)}
                style={{
                  marginTop: '1.2rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  alignSelf: 'center',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                }}
              >
                Accept
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Browse;