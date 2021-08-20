//react stuff
import React from 'react';
import {Link} from "react-router-dom";

//styles and svg
import '../App.scss';
import '../AppMobile.scss';

const LandingPage = () => {

    return(

        <div className={'container landing-page'}>
                <div className={'content-box'}>
                    <h1>Your hair deserves the best</h1>
                    <p>Enjoy & relax in a luxury barber shop environment</p>
                    <Link to={'/appointment'}>
                        <button>MAKE APPOINTMENT</button>
                    </Link>
                </div>
        </div>
    )
}

export default LandingPage;