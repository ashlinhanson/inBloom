import React from "react";

function Button(props) {

    return (
        <div>
            <button type="button" className={props.className} onClick={props.onClick}>Success</button>
        </div>
    )

}

export default Button;