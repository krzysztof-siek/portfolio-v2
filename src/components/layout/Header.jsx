import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="nav-brand">
                        <picture>
                            <img src='/img/logo.png' alt="logo"/>
                        </picture>
                    </div>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;