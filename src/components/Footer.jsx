import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
                <p>Copyright ⓒ {year}</p>
                <p>Made by K.H</p>            
        </footer>
    );
}

export default Footer;