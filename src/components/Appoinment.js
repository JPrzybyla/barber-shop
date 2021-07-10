//react stuff and axios
import React from 'react';
import axios from "axios";
import qs from 'qs';

//importing css and simple-grid library
import '../App.css';




//TODO: do something with how it looks

const Appointment = () => {

    const date = React.createRef();

    const pickedDate = async () => {

        const data = {
            date: date.current.value,
            name: 'dupa'
        }

        const request = await axios.post('http://localhost/barbershop/gethour.php', qs.stringify(data));
        console.log(request);
    }

    return(
        <div className={'container'}>
            <h1>Make an appointment</h1>
            <p><input type={'text'} placeholder={'Name'} className={'text-short-appointment'} required />
            <input type={'tel'} placeholder={'Your number'} className={'text-short-appointment'} required/></p>
            <input type={'date'} className={'date'} placeholder={'Pick a date'} onChange={pickedDate} ref={date}/>
            <button className={'send-button'}>Make Appointment</button>
        </div>
    )
}

export default Appointment;