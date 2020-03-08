import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
            FateBook
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;