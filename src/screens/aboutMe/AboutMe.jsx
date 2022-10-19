import React from "react";
import "./aboutMe.css";
import person from "../../images/img-srk.jpg";
//import person from "../../images/person.png";
import {welcomeMsg} from "../../helpers/parcours";
import {presentation} from "../../helpers/parcours";

function AboutMe() {
    return (
        <div className="about_container" id="about-me">
            <div>
                <img src={person} alt="person icon" style={{width: '250px', height: '250px'}}/>
            </div>
            <div className="about_text">
                <h1>A PROPOS DE MOI</h1>
                <p>{welcomeMsg}<br/>
                    {presentation}
                </p>
            </div>
        </div>
    )
}

export default AboutMe
