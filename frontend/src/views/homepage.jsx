import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Homepage() {
  const [popup, setPopup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // Fetch tasks when component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
          setError("User not logged in");
          setLoading(false);
          return;
        }
        console.log("Fetching tasks for user:", userEmail);
        const response = await axios.get(`http://localhost:8000/tasks?email=${userEmail}`);
        console.log("Fetched response:", response);
        setTasks(response.data.tasks);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks");
        setLoading(false);
      }
    };
    
    fetchTasks();
  }, []);

  const handleAccept = (taskId) => {
    // Here you would implement logic to mark the task as accepted in the database
    console.log(`Task ${taskId} accepted!`);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);
  };

  const toAddTask = () => {
    navigate('/add-task');
  };

  const toBrowseTasks = () => {
    navigate('/browse');
  };

  return (
    <>
      {popup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#000000cc',
          color: '#ffffff',
          padding: '1.5rem 2rem',
          borderRadius: '12px',
          fontSize: '1.2rem',
          fontWeight: 600,
          zIndex: 999,
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}>
          Task accepted!
        </div>
      )}

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
          marginBottom: '1rem'
        }}>
          <h1 style={{
            color: '#000000',
            fontWeight: 600,
            fontSize: '2.9rem',
            margin: 0,
            transform: 'translateX(460px)'
          }}>
            Task Board
          </h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
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
              onClick={toAddTask}>
              Add Request
            </button>
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
              onClick={toBrowseTasks}>
              Available Tasks
            </button>
          </div>
        </div>

        <h2 style={{
          marginBottom: '1rem',
          fontWeight: 500,
          fontSize: '1.5rem',
          color: '#000000',
          paddingLeft: '2rem',
          textAlign: 'left'
        }}>
          Tasks:
        </h2>

        {loading && <p>Loading tasks...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          position: 'relative',
          left: '2rem',
          top: '1rem',
          flexWrap: 'wrap'
        }}>
          {tasks.length === 0 && !loading && !error ? (
            <p>No tasks available at the moment.</p>
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
                  <p><strong>Name:</strong><br />{task.name}</p>
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
    </>
  );
}

export default Homepage;