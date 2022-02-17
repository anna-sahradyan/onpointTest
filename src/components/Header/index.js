import React from 'react';
import { NavLink} from "react-router-dom";
import s from './Header.module.css';
import  Nav from '../Nav'
const Header = () => {

    return (
        <>
            <header>
                <div className={s.navHome}>
                    <NavLink to ='/'><img src="/img/home.png" alt="logo" className={s.logo}/></NavLink>

                </div>
                <Nav/>
            </header>
        </>
    );
};

export default Header;