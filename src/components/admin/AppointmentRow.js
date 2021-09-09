import React from 'react';

//import css
import '../../App.scss';


function AppointmentRow({hour: hour, name: name, type: type, number: number}){


    return (
        <tr>
            <td>{hour.slice(0,-3)}</td>
            <td>{type}</td>
            <td>{name}</td>
            <td>{number}</td>
        </tr>
    );
}

export default AppointmentRow;
