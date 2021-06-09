import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

const Nav = () =>{

    return(
        <nav className={'navRedirected'}>
            <Link to={'/'}>
            <div className="nav-logo">Lucian's BarberShop</div>
            </Link>

            <Link to={'/'}>
            <div className="nav-link">Home</div>
            </Link>

            <Link to={'/about'}>
            <div className="nav-link">About Us</div>
            </Link>

            <Link to={'/contact'}>
            <div className="nav-link">Contact</div>
            </Link>

            <Link to={'/appointment'}>
            <div className="nav-link">Make Appointment</div>
            </Link>
        </nav>
    )
}

export default Nav;