import React, { useState } from "react";
import "../style/Color.css";

export default function Colors(props) {
  const [copyColor, setCopyColor] = useState("");
  props.color(copyColor);

  return (
    <div className="colorSection">
        <div className="colorText">
          <p>{copyColor||"choose a gradient"}</p>
        </div>

        <div className="color" onClick={(e)=>{setCopyColor(e.target.textContent)}}>
          <span id="c1" >
            <p>linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)</p>
          </span>
          <span id="c2" >
            <p>
              radial-gradient( circle farthest-corner at 10% 20%,
              rgba(147,230,241,1) 0%, rgba(145,192,241,1) 45.5% )
            </p>
          </span>
          <span id="c3" >
            <p>
              radial-gradient( circle farthest-corner at 14.2% 24%,
              rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%,
              rgba(239,61,78,0.63) 84.6% )
            </p>
          </span>
          <span id="c4" >
            <p>
              radial-gradient( circle farthest-corner at 10% 20%,
              rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )
            </p>
          </span>
          <span id="c5" >
            <p>linear-gradient(135deg, #667eea 0%, #764ba2 100%)</p>
          </span>
          <span id="c6" >
            <p>radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,246,236,1) 39.5%, rgba(100,46,122,0.23) 100.2% )</p>
          </span>
        </div>
      
    </div>
  );
}
