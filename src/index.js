import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function index() {
    return (
        <div>
            <App/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))