import React from "react";
import "./technologies.css";
import DevIcon from "devicon-react-svg";
import {techs} from "../../helpers/techs";

function Technologies() {
    return (
        <div className="technologies_container" id="technologies">
            <div>
                <h1 style={{ textAlign: 'center' }}>Les technologies que j'utilise</h1>
            </div>
            <div className="tech_cards_container">
                {techs.map((e, index) => {
                    return (
                        <div key={index} className="tech_card">
                            <DevIcon className="tech_icons" icon={e.iconName} />
                            <span style={{ margin: '5px', fontSize: '1.5rem' }}>{e.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies