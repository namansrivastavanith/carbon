// apps/frontend/src/App.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // We use a try-catch block to handle potential errors.
    const fetchData = async () => {
      try {
        // The URL points to our backend's test route.
        const response = await axios.get('http://localhost:5000/api/test');
        setMessage(response.data.message);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
        setMessage('Could not connect to the backend.');
      }
    };

    fetchData();
  }, []); // The empty array [] means this effect runs once when the component mounts.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Carbon Sentinel Project</h1>
        <p>
          Message from backend: <strong>{message}</strong>
        </p>
      </header>
    </div>
  );
}

export default App;