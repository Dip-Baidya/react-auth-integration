import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user } = useFirebase();

    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {user?.displayName && <button>Log out</button>}
        </div>
    );
};

export default Header;