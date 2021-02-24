import React from "react";
import withCursor from "../../static/cursor/HOCs/withCursor";

const Button = props => {
  const Tag = props.href ? "a" : "button";

  const { onCursor } = props.context;

  return (
    <Tag
      onMouseEnter={() => onCursor('pointer')}
      onMouseLeave={onCursor}
      {...props}
    />);
};

export default withCursor(Button);
