import React from "react";
import ArmAngle from "./ArmAnglePlot.png";
import PitchMovementPlot from "./PitchMovementPlot.png";

export const FeatureEngineering = () => {
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "150px", marginTop: "-140px" }}>
        <h5>Data and Features</h5>
        <p style={{ fontSize: "30px", marginTop: "20px", wordWrap: "break-word" }}>
        There are 10 key features that we have identified through our literature review, as well as dataset exploration, which are as follows:
        </p>
        <ul style={{ fontSize: "30px", paddingLeft: "70px", marginTop: "10px", maxWidth: "1200px" }}>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Pitch velocity
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Horizontal and Vertical Movement
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Arm Angle
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Spin Rate
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Release Extension
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Spin Axis
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Velocity difference relative to primary fastball
          </li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>
            Horizontal and Vertical movement relative to primary fastball
          </li>
        </ul>
        <div>
          <img src={ArmAngle} alt="Arm Angle" style={{ width: "100%", height: "auto", maxWidth: "500px", marginTop: "30px" }} />
        </div>
        <div>
          <img src={PitchMovementPlot} alt="Pitch Movement Plot" style={{ width: "100%", height: "auto", maxWidth: "500px", marginTop: "30px" }} />
        </div>
        
      </div>
    </div>
  );
};
