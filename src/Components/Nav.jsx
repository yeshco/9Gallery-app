import React from 'react';

import {Link} from 'react-router-dom'

function Nav() {

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to='/Cats'>Cats</Link>
                </li>
                <li>
                    <Link to='/Dogs'>Dogs</Link>
                </li>
                <li>
                    <Link to='/Computers'>Computers</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Nav