import React from "react";
import './styles/style.css';


const Site = (props) => {
    return (
        <>
            <div id="container">
                <span>{props.message}</span>
            </div>
        </>
    )
}

export default Site;