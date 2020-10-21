import React from 'react';
// import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <Router>
            <div className="NavBar">
                <div id="main-links">
                    <Link to="/clients">Clients</Link>
                    <Link to="/actions">Actions</Link>
                    <Link to="/analytics">Analytics</Link>
                </div>
            </div>
        </Router>
    );
}

export default NavBar;