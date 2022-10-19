import React from "react";
import "./header.css"
import Typed from "react-typed";

function Header() {
    return (
        <div className="main-info">
            <h1>Qui je suis ?</h1>
            <Typed
                strings={[
                    " ",
                    "Etudiant en Master Informatique parcours MIAGE",
                    "Data Analyst",
                    "Développeur full-stack",
                    "Développeur front-end",
                    "Développeur back-end",
                    " ",
                    " "]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </div>
    )
}

export default Header;