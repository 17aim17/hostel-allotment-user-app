import React from 'react';
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="container mt-5">
      <div className="col-md-6 card card-body mx-auto">
        <Link to="/register" className="btn btn-outline-danger btn-lg">
          <i className="fas fa-users"></i> Register
      </Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg mt-3">
          <i className="fas fa-sign-in-alt"></i> Login
      </Link>
      </div>
    </div>
  );
}

export default App;
