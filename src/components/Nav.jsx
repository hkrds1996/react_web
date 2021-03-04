import React from "react";
import Logout from "./Logout";

function Nav(params) {

    return (
        <nav className={params.myClass}>
            <div className="container">
                <a className="navbar-brand d-inline-block align-top" href="/react_web/">K.H</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item" id="home"><a className="nav-link" href="/react_web/">HOME</a></li>
                        <li className="nav-item" id="about"><a className="nav-link" href="/react_web/about">ABOUT US</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dashboard" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                DASHBOARD
                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/react_web/write">LOGIN</a>
                                <div className="dropdown-divider"></div>
                                <Logout></Logout>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
}
export default Nav;