//react stuff and axios
import React, {useState} from 'react';
import axios from "axios";
import qs from 'qs';

//importing css
import '../App.scss';
import img from '../components/images/img2.jpg'

//import form validation script
import emailValidation from './form validation/formValidation';


//TODO: do something with how it looks

const Contact = () => {

    const name = React.createRef();
    const email = React.createRef();
    const message = React.createRef();

    const [errorMessage, seterrorMessage] = useState('');
    const [errorMessageColor, seterrorMessageColor] = useState('#ff1a1a');

    const sendMessage = async () => {

        if(emailValidation(email.current.value)===true){
            const data = {
                name: name.current.value,
                email: email.current.value,
                message: message.current.value
            }

            const request = await axios.post('http://localhost/barbershop/messages.php', qs.stringify(data));
            switch (request.status){
                case 201:
                    seterrorMessageColor('#006600');
                    seterrorMessage('Everything went well, message sent');
                    break;
                case 418:
                    seterrorMessage("don't mess with me you little weiner");
                    break;
                case 503:
                    seterrorMessage("Sorry we got problem with connection to our server, please try again later");
                    break;
                default:
                    break;
            }
        }
        else{
            seterrorMessage('Something went wrong please check your inputs and try again');
        }

    }

    return(
        <div>
            <header className="masthead" style={{backgroundImage: `url(${img})`}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="page-heading">
                                <h1>Contact Us</h1>
                                <span className="subheading">Have questions? We have answers.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send us a message and We will get back to you as soon as possible!</p>
                            <div className="my-5">
                                    <div className="form-floating">
                                        <input ref={name} className="form-control" type="text" placeholder="Enter your name..."/>
                                        <label htmlFor="name">Full name</label>
                                    </div>
                                    <div className="form-floating">
                                        <input ref={email} className="form-control" type="email" placeholder="Enter your email..."/>
                                        <label htmlFor="email">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <textarea ref={message} className="form-control" placeholder="Enter your message here..." style={{height: '12rem'}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <br />
                                    <div style={{
                                        color: errorMessageColor,
                                        margin: '10px'
                                    }}>
                                        {errorMessage}
                                    </div>
                                    <button className="btn btn-primary text-uppercase " type="submit" onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact;