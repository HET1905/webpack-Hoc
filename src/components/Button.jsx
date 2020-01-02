import React from "react";
import buttonStyleWrapper from "../HOC/buttonStyleWrapper";

const Button = props => {
  console.log(props);
  return (
    <div>
      <button style={props.myStyles}>Click ME</button>
    </div>
  );
};

export default buttonStyleWrapper(Button);
