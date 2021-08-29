//react stuff
import React from 'react';

//styles
import '../App.scss';
import img from '../components/images/img2.jpg'

const LandingPage = () => {

    return(

        <div>
            <header className="masthead" style={{backgroundImage: `url(${img})`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Lucian's Barbershop</h1>
                                <span className="subheading">Your hair deserves the best</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-preview">
                            <a href="post.html">
                                <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                            </a>
                            <p className="post-meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on September 24, 2021
                            </p>
                        </div>

                        <hr className="my-4"/>
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase"
                                                                            href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;