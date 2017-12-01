import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (

            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Sammy's Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/treats'>Treats</Link></li>
                        <li><Link to='/snacks'>Snacks</Link></li>
                        <li><Link to='/toys'>Toys</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;