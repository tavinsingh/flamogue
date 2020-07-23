import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <>
    
    <nav>
    <h1 id="flamouge-title">Flamouge</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/finance">Finance</Link>
            </li>
            <li>
                <Link to="/health-and-beauty">Health and Beauty</Link>
            </li>
            <li>
                <Link to="/lifestyle">Lifestyle</Link>
            </li>
        </ul>
    </nav>
    </>



)

export default NavBar;