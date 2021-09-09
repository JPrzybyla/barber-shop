import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import qs from 'qs';

const ProtectedRoute = ({component: Component}) => {

    let history = useHistory();

    const verifyAuth = async () => {

        //verify is the jwt token even exist

        if(sessionStorage.getItem('jwt')!==null){
            const request = await axios.post('http://localhost/barbershop/verifyauth.php',qs.stringify({jwt: sessionStorage.getItem('jwt')}))
            //check the request status
            if(request.status===200){
                //check the request answer
                if (request.data){
                    ReactDOM.render(<Component />,document.getElementById('root'));
                }
                else
                    history.push('/');
            }
            else
                history.push('/');
        }
        else
            history.push('/');
    }

    useEffect(()=>{
        verifyAuth();
    })
    return null
}

export default ProtectedRoute;
