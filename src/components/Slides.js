import React from "react";
import withCursor from "../../static/cursor/HOCs/withCursor";

const Slides = props => {
  const { onCursor } = props.context;

  return (
    <div className="sides">
      <h2>Over on Right and Left absolute buttons</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      {['right', 'left'].map(side => (
        <button
          className={`side-${side}`}
          onClick={() => console.log(`click ${side}`)}
          onMouseEnter={() => onCursor(side)}
          onMouseLeave={onCursor}
        />
      ))}
    </div>);
};

export default withCursor(Slides);