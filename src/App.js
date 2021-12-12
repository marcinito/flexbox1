import React from 'react'
import './style/style.css'
import Logo from './components/Logo'
import {BrowserRouter as Router,Routes,NavLink} from 'react-router-dom'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Axios from './components/Axios'
function App() {
    return (
        <Router>
        <div className="box">
            <header>
            <Logo/>
            </header>
            <div className="axis">
            <nav className="nav">
             <Navigation/>
           
            </nav>
            <main className="main">
            <Main/>
            </main>
</div>
      
        </div>
        </Router>
    )
}

export default App
