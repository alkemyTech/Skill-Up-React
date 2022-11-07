import * as React from "react";

function Plus() {
  return(
    <svg stroke="currentColor" fill="none" strokeWidth={3} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height=".5em" width=".5em">
        <line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} />
    </svg>
    );
}

export default Plus;