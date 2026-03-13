import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CitySelection() {
  const [place, setPlace] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place.trim()) {
      navigate(`/connect-with-local?place=${encodeURIComponent(place)}`);
    }
  };

  const styles = {
    container: {
      marginTop: '9rem',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#fef7f5',
      borderRadius: '10px',
      width: '50%',
      margin: '0 auto',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '5rem',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '40%',
      marginRight: '10px',
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Enter Your Destination</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter the name of the place..."
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Go
        </button>
      </form>
    </div>
  );
}

export default CitySelection;
