import React from 'react';
import {NavLink, useNavigate, useSubmit} from "react-router-dom";
import mainClasses from '../../main.module.css';
import classes from './Header.module.css';
import {getSubject, isAdminUser} from "../../utils/auth";
import logoImage from "../../assets/images/logo.svg";
import Hamburger from "./hamburger/Hamburger";


const Header = () => {
    const isAdmin = isAdminUser();
    const submit = useSubmit();
    const subject = getSubject();
    const navigate = useNavigate();

    const handleLogout = () => {
        submit(null, {action: '/logout', method: 'post'});
    }

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <>
            <header className={mainClasses.header}></header>
            <nav className={mainClasses.navigation}>
                <ul className={classes.nav_list}>
                    <li><NavLink to="/" className={({isActive}) =>
                        isActive ? classes.active : undefined
                    }
                                 end={true}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li><NavLink to="/recipes" className={({isActive}) =>
                        isActive ? classes.active : undefined
                    }
                    >
                        Recipes
                    </NavLink>
                    </li>
                    {isAdmin && <li><NavLink to="/admin/" className={({isActive}) =>
                        isActive ? classes.active : undefined
                    }
                    >
                        Admin
                    </NavLink>
                    </li>}
                    {!isAdmin && <li><NavLink to="/login" className={({isActive}) =>
                        isActive ? classes.active : undefined
                    }
                    >
                        Login
                    </NavLink>
                    </li>}
                    {isAdmin &&
                        <li><NavLink to="/logout" onClick={handleLogout} className={({isActive}) =>
                            isActive ? classes.active : undefined
                        }
                        >
                            Logout (<span className={classes.small}>{subject}</span>)
                        </NavLink>
                        </li>
                    }
                </ul>
            </nav>
            <div className={mainClasses.logo}>
                <img className={classes['logo-image']} src={logoImage} alt="Logo" onClick={handleLogoClick}/>
            </div>
            <Hamburger/>

        </>
    );
};

export default Header;
