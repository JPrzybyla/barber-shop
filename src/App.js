import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import css
import './App.css';

//import components
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {

    return (
    <Router>

        <div className="App">
            <Nav/>
            <Switch>
                <Route path={'/'} exact component={LandingPage}/>
                <Route path={'/about'} exact component={AboutUs}/>
                <Route path={'/contact'} exact component={Contact}/>
            </Switch>
        </div>

    </Router>
  );
}

export default App;
