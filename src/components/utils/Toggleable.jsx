import React, { useState, forwardRef, useImperativeHandle } from "react";
const Toggleable = (props) => {
  const [visible, setVisible] = useState(props.opened);

  const toggleVisibility = () => {
    props.toggle();
  }

  const hideWhenVisible = { display: visible ? "none" : "block" };
  const showWhenVisible = { display: visible ? "block" : "none" };
  return (
    <div>
      <button style={hideWhenVisible} onClick={toggleVisibility}>
        {props.buttonLabel}
      </button>
      <div style={showWhenVisible}>
        {props.children}
        <button style={showWhenVisible} onClick={toggleVisibility}>
          Cancel
        </button>
      </div>
    </div>
  );
};

Toggleable.displayName = "Toggleable";

export default Toggleable;
