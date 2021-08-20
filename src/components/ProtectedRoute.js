import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import isAuth from "./isAuth";

const ProtectedRoute = ({component: Component, ...rest}) => {


    return (
        <Route
            {...rest}
            render={(props) => {

                console.log(isAuth);
                if(true){
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
