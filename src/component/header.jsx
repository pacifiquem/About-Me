import React from "react";
import './styles/style.css';
import Image from './images/logo.png';
import { FaInstagramSquare, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Site from './siteShower';


const Nav = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={Image} alt="pacifique's logo" width="130em" height="75em" />
                </div>
                <div className="links">
                    <div className="sub-links">
                        <strong onClick={()=>window.location.href="https://www.linkedin.com/in/pacifique-murangwa-10394722b/"}><FaLinkedinIn /></strong>
                        <b><Site message="LinkedIn"/></b>
                    </div>
                    <div className="sub-links">
                        <strong onClick={()=>window.location.href="https://www.github.com/pacifiquem"}><FaGithub /></strong>
                        <b><Site message="Github"/></b>
                    </div>
                    <div className="sub-links">
                        <strong onClick={()=>window.location.href="https://www.instagram.com/pacifique__m/"}><FaInstagramSquare /></strong>
                        <b><Site message="Instagram"/></b>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav