import React from 'react';
import {Link} from "react-router-dom";
import s from './Nav.module.css'
import AnimatedPage from "../../Animation/AnimationPage";
const Nav = () => {
    return (
        <AnimatedPage>
            <nav className={s.list}>
                <nav className={s.navList}>

                    <ul><li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/pagination'}>Paging</Link></li>
                        <li><Link to={'/scroll'}>Scroll</Link></li></ul>
                </nav>
            </nav>
        </AnimatedPage>
    );
};

export default Nav;