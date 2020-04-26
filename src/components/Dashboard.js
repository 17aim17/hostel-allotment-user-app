import React from 'react';
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div className="container mt-5 text-center">
            <Link className="btn btn-primary btn-lg" to="/allotment"> <i className="fas fa-hotel"></i> Allot Your Room</Link>
        </div>
    );
}

export default Dashboard;
