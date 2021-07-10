//react stuff and axios
import React from 'react';
import axios from "axios";
import qs from 'qs';

//importing css and simple-grid library
import '../App.css';

//import form validation script
import emailValidation from './form validation/formValidation';


//TODO: do something with how it looks

const Contact = () => {

    const name = React.createRef();
    const email = React.createRef();
    const message = React.createRef();

    const sendMessage = async () => {

        if(emailValidation(email.current.value)===true){
            const data = {
                name: name.current.value,
                email: email.current.value,
                message: message.current.value
            }

            await axios.post('http://localhost/barbershop/messages.php', qs.stringify(data));
        }
    }

    return(
        <div className={'container'}>
            <h1>Send us a message</h1>
            <p><input type={'text'} placeholder={'Name'} className={'text-short'} required ref={name}/></p>
            <p><input type={'text'} placeholder={'Email'} className={'text-short'} required ref={email}/></p>
            <p><input type={'text'} placeholder={'Your message'} className={'text-long'} required ref={message}/></p>
            <button className={'send-button'} onClick={sendMessage}>SEND</button>
        </div>
    )
}

export default Contact;