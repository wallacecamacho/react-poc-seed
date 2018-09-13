/* @flow */

import React from 'react';
import Helmet from 'react-helmet';

class Header extends React.Component {

  render() {
    return (
            <div>
            <Helmet title="Enquete Dashboard" />
            <div id="loader-wrapper">
            <div id="loader"></div>
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
            </div>

            <header id="header" className="page-topbar">
            <div className="navbar-fixed">
                <nav className="navbar-color gradient-45deg-purple-deep-orange gradient-shadow">
                <div className="nav-wrapper">
                    <ul className="left">
                    <li>
                        <h1 className="logo-wrapper">
                        <a href="index.html" className="brand-logo darken-1">
                            <img src="../../images/logo/ameba.svg" alt="materialize logo" ></img>
                            <span className="logo-text hide-on-med-and-down">Enquetes DashBoard</span>
                        </a>
                        </h1>
                    </li>
                    </ul>

                </div>
                </nav>

 
                
              </div> 
            </header>
            </div>
    );
  }
}

export default Header;