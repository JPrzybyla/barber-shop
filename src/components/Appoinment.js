//react stuff and axios
import React, {useState} from 'react';
import axios from "axios";
import qs from 'qs';

//importing css
import '../App.scss';
import '../AppMobile.scss';

//Importing js form validation
import dateValidation from './form validation/formValidation';
import hourValidation from './form validation/formValidation';
import nameValidation from './form validation/formValidation';
import typeValidation from './form validation/formValidation';
import phoneValidation from './form validation/formValidation';

const verification = (date, hour, name, type, phone) => {
    return !!(dateValidation(date) && hourValidation(hour) && nameValidation(name) && typeValidation(type) && phoneValidation(phone) === true);
}
//TODO: do something with how it looks

const Appointment = () => {

    const date = React.createRef();
    const name = React.createRef();
    const number = React.createRef();
    const type = React.createRef();
    const select = React.createRef();

    //Creating useState hooks (ATM I have no idea how to make this prettier)

    const [available8, setAvailable8] = useState(true);
    const [available9, setAvailable9] = useState(true);
    const [available10, setAvailable10] = useState(true);
    const [available11, setAvailable11] = useState(true);
    const [available12, setAvailable12] = useState(true);
    const [available13, setAvailable13] = useState(true);
    const [available14, setAvailable14] = useState(true);
    const [available15, setAvailable15] = useState(true);
    const [available16, setAvailable16] = useState(true);

    //Getting available hours for appointment for that day
    const pickedDate = async () => {

        const request = await axios.post('http://localhost/barbershop/gethour.php', qs.stringify({date: date.current.value}));
        switch (request.status){
            case 418:
                alert("don't mess with me you little weiner");
                break;
            case 503:
                alert("Sorry we got problem with connection to our server, please try again later");
                break;
            default:
                break;
        }

        //TODO: do something with how it looks
        setAvailable8(true);
        setAvailable9(true);
        setAvailable10(true);
        setAvailable11(true);
        setAvailable12(true);
        setAvailable13(true);
        setAvailable14(true);
        setAvailable15(true);
        setAvailable16(true);

        Array.from(select.current.children).forEach(child => {
            for(let x=0;x<request.data.appointments.length; x++){

                //TODO: maybe delete this if statement
                if(child.value===request.data.appointments[x].hour.slice(0, -3)){

                    //Like i said i have no idea how to make this pretty
                    switch (child.value){
                        case '8:00':
                            setAvailable8(false)
                            break;
                        case '9:00':
                            setAvailable9(false)
                            break;
                        case '10:00':
                            setAvailable10(false)
                            break;
                        case '11:00':
                            setAvailable11(false)
                            break;
                        case '12:00':
                            setAvailable12(false)
                            break;
                        case '13:00':
                            setAvailable13(false)
                            break;
                        case '14:00':
                            setAvailable14(false)
                            break;
                        case '15:00':
                            setAvailable15(false)
                            break;
                        case '16:00':
                            setAvailable16(false)
                            break;
                        default:
                            console.log("dupa");
                            break;
                    }
                }
            }
        });
    }

    const makeAppointment = async () => {

        const data = {
            name: name.current.value,
            number: number.current.value,
            type: type.current.value,
            hour: select.current.value,
            date: date.current.value
        }

        //Verify if data is correct and if it is send request
        if(verification(data.date, data.hour, data.name, data.type, data.number)){
            const request = await axios.post('http://localhost/barbershop/appointment.php', qs.stringify(data));

            switch (request.status){
                case 201:
                    //TODO: do some nice stuff when req is made
                    alert("everythign went well");
                    break;
                case 418:
                    alert("don't mess with me you little weiner");
                    break;
                case 503:
                    alert("Sorry we got problem with connection to our server, please try again later");
                    break;
                default:
                    break;
            }
        }
        else
            //TODO: add something to show that data isn't correct
            console.log("chuj");

    }

    return(
        <div className={'container'}>
            <h1>Make an appointment</h1>
            <p><input type={'text'} placeholder={'Name'} className={'text-short-appointment'} required ref={name} />
            <input type={'tel'} placeholder={'Your number'} className={'text-short-appointment'} required ref={number}/></p>
            <select ref={type}>
                <option value={'beard'}>Beard</option>
                <option value={'hair'}>Hair</option>
                <option value={'beard+hair'}>Beard + Hair</option>
            </select>

            <input type={'date'} className={'date'} placeholder={'Pick a date'} onChange={pickedDate} ref={date}/>

            <select ref={select}>
                <option value={'8:00'} disabled={!available8}>8:00</option>
                <option value={'9:00'} disabled={!available9}>9:00</option>
                <option value={'10:00'} disabled={!available10}>10:00</option>
                <option value={'11:00'} disabled={!available11}>11:00</option>
                <option value={'12:00'} disabled={!available12}>12:00</option>
                <option value={'13:00'} disabled={!available13}>13:00</option>
                <option value={'14:00'} disabled={!available14}>14:00</option>
                <option value={'15:00'} disabled={!available15}>15:00</option>
                <option value={'16:00'} disabled={!available16}>16:00</option>
            </select>

            <button className={'send-button'} onClick={makeAppointment}>Make Appointment</button>
        </div>
    )
}

export default Appointment;