import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import qs from 'qs';

//import css
import '../../App.scss';

//import components
import Nav from './Nav';
import AppointmentRow from "./AppointmentRow";

function Admin(){

    useEffect(()=>{
        getAppointments();
    });

    const[appointmentsAmount, setappointmentsAmount] = useState();

    const date = new Date();
    const fullDate = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

    //get list of appointments for today
    const getAppointments = async () => {

        let request;

        //check if it's over 17 and if it is shows appointments for tomorrow
        if(date.getHours()>=17)
            request = await axios.post('http://localhost/barbershop/getappointments.php', qs.stringify({date: `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + (date.getDate()+1)).slice(-2)}`}));

        else
            request = await axios.post('http://localhost/barbershop/getappointments.php', qs.stringify({date: fullDate}));

        setappointmentsAmount(request.data.appointments.length);

        //messy but not much complicated fragment to make a table
        let elements = [];
        elements.push(React.createElement('tr', null, [<td style={{fontWeight: 700}}>Hour</td>,<td style={{fontWeight: 700}}>Type</td>,<td style={{fontWeight: 700}}>Name</td>,<td style={{fontWeight: 700}}>Number</td>]));
        request.data.appointments.forEach( child =>{
            elements.push(React.createElement(AppointmentRow,{hour: child.hour, name: child.name, type: child.type, number: child.number}));
        });
        let mainContainer = React.createElement("table", {className: 'table table-bordered table-responsive'},elements);
        ReactDOM.render(mainContainer, document.getElementById('appointments'));


    }

    return (
        <div>
            <Nav/>
            <div className={'container mt-5'}>
                <h1>Hello</h1>
                <p>Today is {fullDate}</p>
                <h2>You have {`${appointmentsAmount} appointments ${date.getHours()>=17 ? 'tommorow' : 'today'}`}</h2>
                <div id={'appointments'}>

                </div>
            </div>
        </div>
    );
}

export default Admin;
