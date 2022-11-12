import React from "react";

const Button = ({ Action, Variant, Text, Height, Width }) => {
  return (
    <button
      style={{
        color: Variant,
        width: Width,
        height: Height,
      }}
      onClick={Action}
    >
      {Text}
    </button>
  );
};

export default Button;
