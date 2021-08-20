import axios from "axios";
import qs from 'qs';

const isAuth = async () => {
    const request = await axios.post('http://localhost/barbershop/verifyauth.php',qs.stringify({jwt: sessionStorage.getItem('jwt')})).then();
    console.log(`isAuth function ${request.data}`)
    if (request.data===true){
        return "ok";
    }
    else
        return "notok";
};
export default isAuth();