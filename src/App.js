import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import css
import './App.scss';
import './AppMobile.scss';

//import components
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Appointment from "./components/Appoinment";
import Login from "./components/admin/Login";

//Importing protected route and components
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/admin/Admin";

function App() {

    return (
    <Router>

        <div className="App">

            <Switch>
                <Route path={'/'} exact>
                    <Logo/>
                    <Nav/>
                    <LandingPage/>
                </Route>
                <Route path={'/about'} exact>
                    <Logo/>
                    <Nav/>
                    <AboutUs/>
                </Route>
                <Route path={'/contact'} exact>
                    <Logo/>
                    <Nav/>
                    <Contact/>
                </Route>
                <Route path={'/appointment'} exact>
                    <Logo/>
                    <Nav/>
                    <Appointment/>
                </Route>

                {/* Admin panel route */}

                <Route path={'/login'} exact>
                    <Login/>
                </Route>

                {/* Protected routes only for logged users*/}

                <ProtectedRoute path={'/admin'} component={Admin}/>



            </Switch>
        </div>

    </Router>
  );
}

export default App;
