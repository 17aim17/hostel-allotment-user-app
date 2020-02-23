import React from 'react';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default App;
