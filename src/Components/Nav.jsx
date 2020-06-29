// Importing React
import React from 'react';

// Importing Link from react-router
import {Link} from 'react-router-dom'

// The Nav Component
function Nav() {

    // Returning the JSX to render
    // The Link Component sends you to the appropriate URL
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to='cats'>Cats</Link>
                </li>
                <li>
                    <Link to='dogs'>Dogs</Link>
                </li>
                <li>
                    <Link to='computers'>Computers</Link>
                </li>
                <li>
                    <Link to='birds'>Birds</Link>
                </li>
                <li>
                    <Link to='desert'>Desert</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Nav