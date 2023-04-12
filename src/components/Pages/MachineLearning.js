import React from "react";
import RMSE from './RMSE.png';
import ExecutionTimes from './ExecutionTimes.png';

export const MachineLearning = () => {
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "235px", marginTop: "-140px" }}>
        <h5>Types of Potential Models</h5>
        <ul style={{ fontSize: "30px", paddingLeft: "70px", marginTop: "30px", maxWidth: "1200px" }}>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>Random Forest</li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>XgBoost</li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>Artificial Neural Network</li>
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
        <div style={{ flexBasis: "45%", textAlign: "center" }}>
          <img src={RMSE} alt="RMSE" style={{ width: "100%", height: "auto", maxWidth: "500px" }} />
          <p style={{ marginTop: "10px", fontSize: "30px" }}>
              Comparison of RMSE values
          </p>
        </div>

        <div style={{ flexBasis: "45%", textAlign: "center" }}>
          <img src={ExecutionTimes} alt = "Execution Times" style={{ width: "100%", height: "auto", maxWidth: "500px", marginLeft: "-50px" }} />
          <p style={{ marginTop: "10px", fontSize: "30px" }}>
            Comparison of Execution Times
          </p>
        </div>
      </div>
    </div>
  );
};