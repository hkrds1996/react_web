import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <p className="navbar-brand">K.H</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li id="home"><a href="/">HOME</a></li>
                        <li id="about"><a href="/about">ABOUT US</a></li>
                        <li id="contact"><a href="/contact">CONTACT US</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;