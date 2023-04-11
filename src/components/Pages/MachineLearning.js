import React from "react";
import RMSE from './RMSE.png';
import ExecutionTimes from './ExecutionTimes.png';

export const MachineLearning = () => {
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "235px", marginTop: "-100px" }}>
        <h4>Types of Potential Models</h4>
        <ul style={{ fontSize: "30px", paddingLeft: "70px", marginTop: "30px", maxWidth: "1200px" }}>
          <li style={{ wordWrap: "break-word" }}>Random Forest</li>
          <li style={{ wordWrap: "break-word" }}>XgBoost</li>
          <li style={{ wordWrap: "break-word" }}>Artificial Neural Network</li>
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
        <div style={{ flexBasis: "45%", textAlign: "center" }}>
          <img src={RMSE} alt="RMSE" style={{ width: "100%", height: "auto", maxWidth: "500px" }} />
          <p style={{ marginTop: "10px", fontSize: "30px" }}>Random Forest Model</p>
        </div>

        <div style={{ flexBasis: "45%", textAlign: "center" }}>
          <img src={ExecutionTimes} alt = "Execution Times" style={{ width: "100%", height: "auto", maxWidth: "500px", marginLeft: "-50px" }} />
          <p style={{ marginTop: "10px", fontSize: "30px" }}>XgBoost Model</p>
        </div>
      </div>
    </div>
  );
};