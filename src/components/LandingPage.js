//react stuff
import React from 'react';
import {Link} from "react-router-dom";

//styles and svg
import '../App.css';
import pic2 from './images/undraw_barber_3uel.svg';

const LandingPage = () => {


    return(
        <div>
            <div className={'container'}>
                <img src={pic2} alt={'dupa'}/>
                <div className={'content-box'}>
                    <h1>Lucian's BarberShop</h1>
                    <p>It's not just a haircut, It's an experience</p>
                    <Link to={'/appointment'}>
                        <div className={'button'}>MAKE APPOINTMENT</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;