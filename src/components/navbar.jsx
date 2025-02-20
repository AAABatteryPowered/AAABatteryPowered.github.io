import '../styles/navbar.css';

import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";

function NavbarMenu() {
    return (
        <div className='navbar-menu'>
            <a className='navbar-menu-item'>Home</a>
            <a className='navbar-menu-item'>Projects</a>
            <a className='navbar-menu-item'>Contact</a>
        </div>
    )
}

function Navbar() {
    const [toggled, setToggled] = useState(false);

    return (
        <div className='navbar'>
            <RiMenu2Fill className='open-navbar' onClick={() => {
                setToggled(!toggled);
                document.querySelector(".navbar-menu").classList.toggle("navbar-menu-hidden");
            }}/>
            <NavbarMenu/>
        </div>
    )
}

export default Navbar;