import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import axios from "axios";
import qs from 'qs';

//import css
import './admin.scss';

function Login(){

    //Check if user is already logged in

    const history = useHistory();
    useEffect(()=>{
        if(sessionStorage.getItem('isAuth')==='true'){
            history.push('/admin');
        }
    })

    const username = React.createRef();
    const passwd = React.createRef();

    const login = async () => {

        const data = {
            username: username.current.value,
            password: passwd.current.value
        }

        const request = await axios.post('http://localhost/barbershop/login.php', qs.stringify(data));

        if (request.data !== false){
            sessionStorage.setItem('jwt', request.data);
            history.push('/admin');
        }
        else{
            alert('chuj');
        }
    }

    return (
        <div>
            <input type={'text'} placeholder={'Username'} ref={username}/>
            <input type={'password'} placeholder={'Password'} ref={passwd}/>
            <button onClick={login}/>
        </div>
    );
}

export default Login;
