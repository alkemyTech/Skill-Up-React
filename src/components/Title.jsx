
// className shoud follow tailwind pattern
import React from 'react'

function Title({type, className, text}) {
    if(type !== "h1" && type !== "h2" && type !== "h3" && type !== "h4" && type !== "h5" && type !== "h6") {
        throw new Error("Invalid type, Title should receive: h1, h2, h3, h4, h5 or h6")
    }
    return (
        <div>
            {React.createElement(
                type, 
                {className: className}, 
                text)}
        </div>
    )
}

export default Title