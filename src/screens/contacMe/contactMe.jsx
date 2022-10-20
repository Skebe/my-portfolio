import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";
import {FaLinkedin} from "react-icons/fa";
import {SiGmail} from "@react-icons/all-files/si/SiGmail";
import {FaTwitter} from "react-icons/fa";
import {SiGithub} from "@react-icons/all-files/si/SiGithub";

function createLinks() {
    return navigationLinks.map((e, index) => (
        <p key={index}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
    return(
        <div className="contactMe_container" id="contact">
            <div className="contactMe_data_links">
                <div>
                    <p><a href="https://linkedin.com/in/serigne-kebe-83ba26177" target="_blank"><FaLinkedin/>&nbsp;LinkedIn</a></p>
                    <p><a href="https://twitter.com/KEBESerigne2" target="_blank"><FaTwitter/>&nbsp;Twitter</a></p>
                    <p><a href="https://github.com/Skebe/" target="_blank"><SiGithub/>&nbsp;Github</a></p>
                    <p><a href="mailto:kebeserigne099@gmail.com" target="_blank"><SiGmail/>&nbsp;kebeserigne099@gmail.com</a></p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{textAlign: 'center'}}>Copyright&copy; {new Date().getFullYear()} Tous droits réservés.</div>
        </div>
    )
}

export default ContactMe