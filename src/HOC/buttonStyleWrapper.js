import React from "react";
import CommonStyles from "../styles/commonStyles";
// import commonStyles from "../styles/commonStyles";

const traslateProps = props => {
  let newStyle = { ...CommonStyles.default };
  if (props.disabled) {
    newStyle = { ...CommonStyles.default, ...CommonStyles.disabled };
  }

  const newProps = { ...props, myStyles: newStyle };
  return newProps;
};

export default buttonStyleWrapper => {
  return function wrappedContent(args) {
    return buttonStyleWrapper(traslateProps(args));
  };
};
