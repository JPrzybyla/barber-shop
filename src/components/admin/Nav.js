import React from 'react';


//import css
import '../../App.scss';

function Nav(){

    window.addEventListener('DOMContentLoaded', event => {

        // Toggle the side navigation
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            //     document.body.classList.toggle('sb-sidenav-toggled');
            // }
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }

    });

    const logout = () => {
        sessionStorage.removeItem('jwt');
        window.location.replace('/');
    }

    return (
        //TODO: do something with this links
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="/admin">Admin Panel</a>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">

            </form>
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"/></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/admin/messages">Messages</a></li>
                        <li><a className="dropdown-item" href="/admin/appointments">Appointments</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><span className="dropdown-item" onClick={logout}>Logout</span></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
