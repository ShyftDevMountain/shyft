import React from 'react';
import {Link} from 'react-router';

import SideMenu from '../SideMenu/SideMenu.jsx'
import SideMenuBackDrop from '../SideMenuBackDrop/SideMenuBackDrop.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginComp from '../../Login/LoginComp/LoginComp.jsx';
import './NavBar.css';

class NavBar extends React.Component {

    handleHover(){
        var explore = document.getElementById('explore');
        var logo = document.getElementById('logo');
        var logo2 = document.getElementById('logo2');
        var navbarDrop = document.getElementById('navbar-drop');
        var rideLyft = document.getElementById('navbar-ride-lyftbtn')
        var signup = document.getElementById('navbar-signup');
        var signupLink = document.getElementById('signup-link');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');
        var cities = document.getElementById('cities');
        var help = document.getElementById('help');
        var ride = document.getElementById('ride');
        var login = document.getElementById('login');

        cities.classList.add('navbar-link-active');
        help.classList.add('navbar-link-active');
        ride.classList.add('navbar-link-active');
        login.classList.add('navbar-link-active');
        carrot.classList.add('carrot-active');
        explore.classList.remove('navbar-container');
        explore.classList.add('navbar-active');
        rideLyft.classList.add('navbar-ride-lyft-active');
        signup.classList.add('navbar-signup-active');
        signupLink.classList.add('navbar-pink-link');
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
        var signupLink = document.getElementById('signup-link');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');
        var cities = document.getElementById('cities');
        var help = document.getElementById('help');
        var ride = document.getElementById('ride');
        var login = document.getElementById('login');

        navbarDrop.classList.remove('navbar-hover-container-active');
        setTimeout(function(){
            explore.classList.add('navbar-container');
            explore.classList.remove('navbar-active');
            logo.classList.remove('navbar-logo-hide');
            logo2.classList.remove('navbar-logo-show');
            rideLyft.classList.remove('navbar-ride-lyft-active');
            signup.classList.remove('navbar-signup-active');
            signupLink.classList.remove('navbar-pink-link');
            navbarRight.classList.remove('navbar-right-active');
            carrot.classList.remove('carrot-active');
            cities.classList.remove('navbar-link-active');
            help.classList.remove('navbar-link-active');
            ride.classList.remove('navbar-link-active');
            login.classList.remove('navbar-link-active');
        }, 300);
    }

    constructor(props) {
      super(props);
      this.state = {
        showMenu: 'sidemenu',
        showBackDrop: 'SideMenuBackDrop',
      }
      this.hideMenu = this.hideMenu.bind(this);
      this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
      this.setState({
        showMenu: 'sidemenu active',
        showBackDrop: 'SideMenuBackDrop active'
      })
    }

    hideMenu() {
      console.log('testing');
      this.setState({
        showMenu: 'sidemenu',
        showBackDrop: 'SideMenuBackDrop'
      })
    }



  render() {
    return (
    <div>

        <LoginComp />


        <SideMenu showMenu={this.state.showMenu}/>
            <SideMenuBackDrop showMenu={this.state.showBackDrop} hideMenu={this.hideMenu}/>
            <div className="navbar-mobile">
                <span className="glyphicon glyphicon-menu-hamburger" onClick={this.showMenu}></span>
                <img src="img/LYFT_LOGO/SVG/white_logo.svg"/>
            </div>


        <div onMouseLeave={this.handleHoverLeave}>
            <div id="explore" className="navbar-container">
                <div className="navbar-left">
                    <div id="logo" className="navbar-logo">
                        <Link to="/"><img src="./img/LYFT_LOGO/SVG/white_logo.svg"/></Link>
                    </div>
                    <div id="logo2" className="navbar-logo2">
                        <Link to="/"><img src="./img/LYFT_LOGO/SVG/lyft_pixel.svg"/></Link>
                    </div>

                    <ul className="navbar-list">
                        <li>
                            <Link to="/cities" id="cities">Cities</Link>
                        </li>
                        <li><Link to="/" id="help">Help</Link></li>
                        <li onMouseEnter={this.handleHover}>Explore<span id="carrot" className="carrot glyphicon glyphicon-menu-down"></span></li>
                    </ul>
                </div>
                <div id="navbar-right" className="navbar-right">
                    <div id="navbar-ride-lyftbtn" className="navbar-ride-lyft"><Link to="/rides" id="ride" className="hover-link-none">Ride with Shyft</Link></div>
                    <div className="navbar-login">
                        <Link to="/login" id="login">Login</Link>
                    </div>
                </div>
                <div  id='navbar-signup' className="navbar-signup">
                    <Link to="/userdashboard" id="signup-link">Sign up</Link>
                </div>
            </div>

            <div id="navbar-drop" className="navbar-hover-container">
                <div className="navbar-hover-options">Enterprise</div>
                <div className="navbar-hover-options">Partnerships</div>
                <div className="navbar-hover-options">Ambassadors</div>
                <div className="navbar-hover-options border-hide">Blog</div>
            </div>
        </div>


        {this.props.children}
        <Footer/>

    </div>
    )
  }
}
export default NavBar;
