import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar_left">
                    <h1>Pulse <span>.</span></h1>
                </div>
                <div className="navbar_center">
                    <ul>
                        <li> <NavLink to={"/"} className={"page"}>Home</NavLink></li>
                        <li> <NavLink to={"/add"} className={"page"}>AddPage</NavLink></li>
                        <li> <NavLink to={"/detail"} className={"page"}>Detail</NavLink></li>
                        <li> <NavLink to={"/basket"} className={"page"}>Basket</NavLink></li>
                        <li> <NavLink to={"/wishlist"} className={"page"}>Wishlist</NavLink></li>
                        <li> <NavLink to={"/"} className={"page"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar_right">
                    <span>Reservations </span>
                    <i className="fa-solid fa-phone"></i>
                    <p> 652-345 3222 11</p>
                </div>
            </div>
           
            
        </nav>
    )
}

export default Navbar