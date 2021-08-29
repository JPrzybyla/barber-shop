import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import css
import './App.scss';
import './AppMobile.scss';

//import bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//import public components
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Appointment from "./components/Appoinment";
import Footer from "./components/Footer";

//Importing protected route and components
import Login from "./components/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/admin/Admin";

function App() {

    return (
    <Router>

        <div className="App">

            <Switch>
                <Route path={'/'} exact>
                    <Nav/>
                    <LandingPage/>
                    <Footer/>
                </Route>
                <Route path={'/about'} exact>
                    <Nav/>
                    <AboutUs/>
                    <Footer/>
                </Route>
                <Route path={'/contact'} exact>
                    <Nav/>
                    <Contact/>
                    <Footer/>
                </Route>
                <Route path={'/appointment'} exact>
                    <Nav/>
                    <Appointment/>
                    <Footer/>
                </Route>

                {/* Admin panel route */}

                <Route path={'/login'} exact>
                    <Login/>
                </Route>

                {/* Protected routes only for logged users*/}

                <Route path={'/admin'} exact>
                    <ProtectedRoute component={Admin}/>
                </Route>



            </Switch>
        </div>

    </Router>
  );
}

export default App;
