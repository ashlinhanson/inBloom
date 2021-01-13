import React from "react";

function BackToGardenBtn(props) {

    return (
        <div>
            <button id="back-to-garden-btn" className="btn btn-outline-success" onClick={props.onClick}>Back to Garden</button>
        </div>
    )

}

export default BackToGardenBtn;