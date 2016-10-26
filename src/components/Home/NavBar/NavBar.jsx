import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    handleHover(){
        var explore = document.getElementById('explore');
        var logo = document.getElementById('logo');
        var logo2 = document.getElementById('logo2');
        var navbarDrop = document.getElementById('navbar-drop');
        var rideLyft = document.getElementById('navbar-ride-lyftbtn')
        var signup = document.getElementById('navbar-signup');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');

        carrot.classList.add('carrot-active');
        explore.classList.remove('navbar-container');
        explore.classList.add('navbar-active');
        rideLyft.classList.add('navbar-ride-lyft-active');
        signup.classList.add('navbar-signup-active');
        navbarRight.classList.add('navbar-right-active');
        logo.classList.add('navbar-logo-hide');
        logo2.classList.add('navbar-logo-show');
        setTimeout(function(){
            navbarDrop.classList.add('navbar-hover-container-active');
        }, 135);
    }

    handleHoverLeave(){
        var explore = document.getElementById('explore');
        var logo = document.getElementById('logo');
        var logo2 = document.getElementById('logo2');
        var navbarDrop = document.getElementById('navbar-drop');
        var rideLyft = document.getElementById('navbar-ride-lyftbtn')
        var signup = document.getElementById('navbar-signup');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');

        navbarDrop.classList.remove('navbar-hover-container-active');
        setTimeout(function(){
            explore.classList.add('navbar-container');
            explore.classList.remove('navbar-active');
            logo.classList.remove('navbar-logo-hide');
            logo2.classList.remove('navbar-logo-show');
            rideLyft.classList.remove('navbar-ride-lyft-active');
            signup.classList.remove('navbar-signup-active');
            navbarRight.classList.remove('navbar-right-active');
            carrot.classList.remove('carrot-active');
        }, 300);
    }

  render() {
    return (
        <div onMouseLeave={this.handleHoverLeave}>
            <div className="navbar-mobile">
                <span className="glyphicon glyphicon-menu-hamburger"></span>
                <img src="./src/img/LYFT_LOGO/SVG/white_logo.svg"/>
            </div>

            <div id="explore" className="navbar-container">
                <div className="navbar-left">
                    <div id="logo" className="navbar-logo">
                        <img src="./src/img/LYFT_LOGO/SVG/white_logo.svg"/>
                    </div>
                    <div id="logo2" className="navbar-logo2">
                        <img src="./src/img/LYFT_LOGO/SVG/lyft_pixel.svg"/>
                    </div>

                    <ul className="navbar-list">
                        <li>Cities</li>
                        <li>Help</li>
                        <li onMouseEnter={this.handleHover}>Explore<span id="carrot" className="carrot glyphicon glyphicon-menu-down"></span></li>
                    </ul>
                </div>
                <div id="navbar-right" className="navbar-right">
                    <div id="navbar-ride-lyftbtn" className="navbar-ride-lyft">Ride with Shyft</div>
                    <div className="navbar-login">
                        Login
                    </div>
                </div>
                <div id='navbar-signup' className="navbar-signup">
                    Sign up
                </div>
            </div>

            <div id="navbar-drop" className="navbar-hover-container">
                <div className="navbar-hover-options">Enterprise</div>
                <div className="navbar-hover-options">Partnerships</div>
                <div className="navbar-hover-options">Ambassadors</div>
                <div className="navbar-hover-options border-hide">Blog</div>
            </div>
        </div>
    )
  }
}

export default NavBar;
