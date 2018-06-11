import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Menu extends PureComponent {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default Menu;
