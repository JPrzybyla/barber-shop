import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import axios from "axios";
import qs from 'qs';

const ProtectedRoute = ({isAuth: isAuth, component: Component, ...rest}) => {


    return (
        <Route
            {...rest}
            render={(props) => {

            if(verified){
                return <Component />;
            }
            else{
                return (
                    <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
            }
            }/>
    );
}

export default ProtectedRoute;
