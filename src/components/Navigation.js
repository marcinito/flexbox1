import React from 'react'
import {BrowserRouter as Router,Routes,NavLink} from 'react-router-dom'

function Navigation() {
    return (
        <div>
               <ul className="nav__ul">
               <li className="nav__ul__li">
                    <NavLink to="/">Strona głowna</NavLink>
                    </li>
                    <li className="nav__ul__li">
                    <NavLink to="/flexdirection">flex-direction</NavLink>
                    </li>
                    <li className="nav__ul__li">
                    <NavLink to="/justifycontent">justify-content</NavLink>
                    </li>
                    <li className="nav__ul__li">
                    <NavLink to="/alignitems">align-items</NavLink>
                    </li>
                    <li className="nav__ul__li">
                    <NavLink to="/donowald">Donowald</NavLink>
                    </li>
                  
                </ul>
        </div>
    )
}

export default Navigation
