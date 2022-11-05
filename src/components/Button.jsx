import React from "react";

const Button = ({ onClick, Color,Text, Height, Width }) => {
    return (
        <button
            style={{
                colors: Color,
                width: Width,
                height: Height
            }}
            onClick={onClick}
        >{Text}
        </button>
    );
};

export default Button;