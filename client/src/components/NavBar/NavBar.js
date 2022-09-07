import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../components/NavBar/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">BillBoarDad</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link link" to="/">Home</NavLink>
                        <NavLink className="nav-link link" to="/contacts">Contacts</NavLink>
                        <NavLink className="nav-link link" to="/my-billboards">Profile</NavLink>
                        <NavLink className="nav-link" to="/log-in" id='log-in-btn'>Log in</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
