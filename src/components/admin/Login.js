import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import axios from "axios";
import qs from 'qs';

//import css
import './admin.scss';

function Login(){


    const history = useHistory();

    //create input refs
    const username = React.createRef();
    const passwd = React.createRef();

    //create error states
    const [errorMessage, seterrorMessage] = useState('');
    const [errorMessageColor, seterrorMessageColor] = useState('#ff1a1a');

    const login = async () => {

        const data = {
            username: username.current.value,
            password: passwd.current.value
        }

        //get login request
        const request = await axios.post('http://localhost/barbershop/login.php', qs.stringify(data));

        if(request.status!==403){
            if (request.data !== false){
                sessionStorage.setItem('jwt', request.data);
                history.push('/admin');
            }
            else
                seterrorMessage('Invalid credentials, please try again');
        }
        else
            seterrorMessage('Invalid credentials, please try again');
    }

    return (
        <div className={'container'}>
            <div className={'col col-lg-4 position-absolute top-50 start-50 translate-middle'}>
                <div className="form-floating">
                    <input ref={username} className="form-control" type="text" placeholder="Login"/>
                    <label htmlFor="name">Login</label>
                </div>
                <div className="form-floating">
                    <input ref={passwd} className="form-control" type="password" placeholder="Password"/>
                    <label htmlFor="email">Password</label>
                </div>
                <br />
                <div style={{
                    color: errorMessageColor,
                    margin: '10px'
                }}>
                    {errorMessage}
                </div>
                <button className="btn btn-primary text-uppercase " type="submit" onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;
