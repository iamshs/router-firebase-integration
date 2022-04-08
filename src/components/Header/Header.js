import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFireBase';
import './Header.css'

const Header = () => {
    const { user, googleSignOut } = useFirebase()
    return (
        <div className="header">
            <nav>

                <Link to={'/'}>Home</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ? <button onClick={googleSignOut}>Sign Out</button> : <Link to={'/login'}>LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;