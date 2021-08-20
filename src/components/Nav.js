import React from 'react';
import {Link} from "react-router-dom";
import './nav.scss';


const Nav = () =>{

    let links = [];

    const toggleOnMenu = () => {
        links.forEach(link => {
            link.style.visibility = 'visible';
        })
    }
    const toggleOffMenu = () => {
        links.forEach(link => {
            link.style.visibility = 'hidden';
        })
    }

    return(
        <nav>
            <div className={'mobile-logo'} onClick={toggleOnMenu}>
                <div>Lucian's Barbershop</div>
                <div><i className="fas fa-bars"></i></div>
            </div>

            <Link to={'/'}>
            <div
                ref={(link) => { links.push(link) }}
                className={'link'}
                onClick={toggleOffMenu}>Home</div>
            </Link>

            <Link to={'/about'}>
            <div
                ref={(link) => { links.push(link) }}
                className={'link'}
                onClick={toggleOffMenu}>About Us</div>
            </Link>

            <Link to={'/contact'}>
            <div
                ref={(link) => { links.push(link) }}
                className={'link'}
                onClick={toggleOffMenu}>Contact</div>
            </Link>

            <Link to={'/appointment'}>
            <div
                ref={(link) => { links.push(link) }}
                className={'link'}
                onClick={toggleOffMenu}>Make Appointment</div>
            </Link>
        </nav>
    )
}

export default Nav;