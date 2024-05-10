import React from 'react';

import mainClasses from '../../main.module.css';
import './Footer.module.css';

const Footer = () => {
    return (
        <footer className={mainClasses.footer}>
            <a href="https://github.com/lstierney/recipe-website-frontend" rel="noreferrer"
               target="_blank">{process.env.REACT_APP_NAME} v{process.env.REACT_APP_VERSION}</a>
        </footer>
    );
};

export default Footer;
