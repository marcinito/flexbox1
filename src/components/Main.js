import React from 'react'
import {BrowserRouter as Router,Routes,NavLink,Route} from 'react-router-dom'
import StronaGlowna from './StronaGlowna'
import FlexDirection from './FlexDirection'
import JustifyContent from './JustifyContent'
import AlignItems from './AlignItems'
import Axios from './Axios'


function Main() {
    return (
        <div className="menu">
            <Routes>
                <Route path="/" element={<StronaGlowna/>}></Route>
                <Route path="/flexdirection" element={<FlexDirection/>}></Route>
                <Route path="/justifycontent" element={<JustifyContent/>}></Route>
                <Route path="/alignitems" element={<AlignItems/>}></Route>
                <Route path="/donowald" element={<Axios/>}></Route>
            </Routes>
        </div>
    )
}

export default Main
