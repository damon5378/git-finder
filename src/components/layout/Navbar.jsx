import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className={`${"logo"} ${props.icon}`}></i>{props.title}
                </h1>
                <ul className="nav-link">
                    <li>
                        <Link to='/git-finder' className="nav-link__item">Home</Link>
                    </li>
                    <li>
                        <Link to='/git-finder/about' className="nav-link__item">About</Link>
                    </li>
                </ul>
                
                
            </nav>
        )
}

export default Navbar
