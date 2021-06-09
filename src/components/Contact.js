//react stuff and axios
import React from 'react';
import axios from "axios";

//importing css and simple-grid library
import '../App.css';


//TODO: add scroll-magic library

const Contact = () => {

    const name = React.createRef();
    const email = React.createRef();
    const message = React.createRef();

    const sendMessage = async () => {
        const req = await axios.post('http://localhost/barbershop/messages.php', {
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        })
        const reqJson = await req.json();
        console.log(reqJson);
    }

    return(
        <div className={'container'}>
            <h1>Send us a message</h1>
            <p><input type={'text'} placeholder={'Name'} className={'text-short'} required ref={name}/></p>
            <p><input type={'text'} placeholder={'Email'} className={'text-short'} ref={email}/></p>
            <p><input type={'text'} placeholder={'Your message'} className={'text-long'} ref={message}/></p>
            <div className={'send-button'} onClick={sendMessage}>SEND</div>
        </div>
    )
}

export default Contact;