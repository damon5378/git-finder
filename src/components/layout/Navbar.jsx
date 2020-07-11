import React from 'react';


const Navbar = (props) => {
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className={`${"logo"} ${props.icon}`}></i>{props.title}
                </h1>
            </nav>
        )
}

export default Navbar
