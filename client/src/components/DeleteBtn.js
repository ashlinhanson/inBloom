import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {

    function onClick(){
        mysql_query("DELETE FROM plants WHERE ");
    }

  return (
    <span className="delete-btn text-right" {...props} role="button" tabIndex="0" onclick={onClick}>
      ✗
    </span>
  );
}

export default DeleteBtn;