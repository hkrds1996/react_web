import React from 'react';
import Nav from './Nav';

function Header() {
    const navClass = "navbar-expand-lg navbar-light  navbar";
    return (
        <header>
            <Nav myClass = {navClass}> </Nav>
        </header>
    );
}

export default Header;