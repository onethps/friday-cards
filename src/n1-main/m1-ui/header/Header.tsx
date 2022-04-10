import React from 'react';
import {Link} from 'react-router-dom';
import {PATH} from "../routes/ProjectRoutes";
import s from './Header.module.scss'

const Header = () => {
    return (
        <div>

            <ul className={s.links_block}>
                <li><Link className={s.linkStyle} to={PATH.TEST}>TEST</Link></li>
                <li><Link className={s.linkStyle} to={PATH.LOGIN}>LOGIN</Link></li>
                <li><Link className={s.linkStyle} to={PATH.PROFILE}>PROFILE</Link></li>
                <li><Link className={s.linkStyle} to={PATH.REGISTER}>REGISTER</Link></li>
                <li><Link className={s.linkStyle} to={PATH.NEW_PASSWORD}>NEW PASSWORD</Link></li>
                <li><Link className={s.linkStyle} to={PATH.RESET_PASSWORD}>RESET PASSWORD</Link></li>
                <li><Link className={s.linkStyle} to={'/404'}>404</Link></li>
            </ul>

        </div>
    );
};

export default Header;