import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Homepage() {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const handleAccept = (name) => {
    console.log(`${name}'s request accepted!`);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000); // Popup disappears after 2 seconds
  };

  const toAddTask= () => {
    navigate('/add-task');
  }

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
            Insert Name Here
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
            onClick={toAddTask}>
            Add Request
          </button>
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

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.5rem',
          position: 'relative',
          left: '2rem',
          top: '1rem'
        }}>
          {/* CARD 1 */}
          <div style={{
            backgroundColor: '#8cbdb2',
            width: '240px',
            padding: '1rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`
          }}>
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
              Request: Dinner Help
            </div>
            <div style={{ color: '#000000', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <p><strong>Name:</strong><br />Sarah Williams</p>
              <p><strong>Address:</strong><br />123 Olive Lane</p>
              <p><strong>Date:</strong><br />2025/07/03</p>
              <p><strong>Description:</strong><br />Need dinner prepared and dropped off Monday evening.</p>
            </div>
            <button onClick={() => handleAccept("Sarah")} style={{
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
            }}>
              Accept
            </button>
          </div>

          {/* CARD 2 */}
          <div style={{
            backgroundColor: '#8cbdb2',
            width: '240px',
            padding: '1rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`
          }}>
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
              Request: Child Pickup
            </div>
            <div style={{ color: '#000000', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <p><strong>Name:</strong><br />Amy Davis</p>
              <p><strong>Address:</strong><br />45 Maple Crescent</p>
              <p><strong>Date:</strong><br />2025/07/02</p>
              <p><strong>Description:</strong><br />Pick up son from school Thursday at 3 PM.</p>
            </div>
            <button onClick={() => handleAccept("Amy")} style={{
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
            }}>
              Accept
            </button>
          </div>

          {/* CARD 3 */}
          <div style={{
            backgroundColor: '#8cbdb2',
            width: '240px',
            padding: '1rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`
          }}>
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
              Request: Grocery Delivery
            </div>
            <div style={{ color: '#000000', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <p><strong>Name:</strong><br />James Brown</p>
              <p><strong>Address:</strong><br />78 Cedar Grove</p>
              <p><strong>Date:</strong><br />2025-06-30</p>
              <p><strong>Description:</strong><br />Needs groceries delivered this weekend.</p>
            </div>
            <button onClick={() => handleAccept("James")} style={{
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
            }}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;