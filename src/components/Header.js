import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (

            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Sammys Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/pages/treats'>Treats</Link></li>
                        <li><Link to='/pages/snacks'>Snacks</Link></li>
                        <li><Link to='/pages/toys'>Toys</Link></li>
                    </ul>
                </div>
                <div className="collection">
                    <a href="#!" className="collection-item"><span className="new badge">4</span>Posts</a>
                </div>
            </nav>
        )
    }
}

export default Header;