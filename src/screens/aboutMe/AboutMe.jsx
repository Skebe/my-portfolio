import React from "react";
import "./aboutMe.css";
import person from "../../images/person.png"

function AboutMe() {
    return (
        <div className="about_container" id="about-me">
            <div>
                <img src={person} alt="person icon"/>
            </div>
            <div className="about_text">
                <h1>A PROPOS DE MOI</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
    )
}

export default AboutMe
