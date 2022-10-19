import React from "react";
import "./contactMe.css";
import { navigationLinks } from "../../helpers/navigationLinks";

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
                    <p>Quelque part, FR</p>
                    <p>Serigne kebe</p>
                    <p><a href="mailto:kebeserigne099@gmail.com">kebeserigne099@gmail.com</a></p>
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