import React from "react";
import ArmAngle from "./ArmAnglePlot.png";
import PitchMovementPlot from "./PitchMovementPlot.png";

export const FeatureEngineering = () => {
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "150px", marginTop: "-140px" }}>
        <h5>Data and Features</h5>
        <p style={{ fontSize: "30px", marginTop: "20px", wordWrap: "break-word" }}>
        Our primary focus was to include variables that the pitcher can reliably and consistently control:
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
            <img src={ArmAngle} alt="Arm Angle" style={{ width: "100%", height: "auto", maxWidth: "500px", marginTop: "50px" }} />
            <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "50px" }}>
              <li>
                Looking at the plot, we can see that there is roughly an equal amount of pitches
              </li>
              <li>
                thrown with each arm slot, balanced across both left and right handed pitchers.
              </li>
              <li>
                This means that during model training, we will not inadvertently
              </li>
              <li>
                value one arm angle over the other due to how often it appears in the dataset compared to another arm angle.
              </li>
            </ul>
          </div>

          <div>
            <img src={PitchMovementPlot} alt="Pitch Movement Plot" style={{ width: "100%", height: "auto", maxWidth: "500px", marginTop: "30px" }} />
            <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "100px" }}>
              <li>
                Spin Induced Pitch Movement Plot for Spencer Strider
              </li>
            </ul>
          </div>



      </div>
    </div>
  );
};