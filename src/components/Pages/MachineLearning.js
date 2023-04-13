import React from "react";
import RMSE from './RMSE.png';
import ExecutionTimes from './ExecutionTimes.png';
import StuffGrade from './stuffGrade.png';

export const MachineLearning = () => {
  return (
    <div>
      <div style={{ textAlign: "left", paddingLeft: "150px", marginTop: "-140px" }}>
        <h5>Types of Potential Models</h5>
        <ul style={{ fontSize: "30px", paddingLeft: "70px", marginTop: "30px", maxWidth: "1200px" }}>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>Random Forest</li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>XgBoost</li>
          <li style={{ wordWrap: "break-word", marginBottom: '15px' }}>Artificial Neural Network</li>
        </ul>
      </div>

      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: '20px'}}>
          When training and testing these models, we saw that the xgboost had a small score improvement over the random forest model
          More importantly, the time to train the xgboost model was significantly less than the random forest, which would allow us to explore more options for hyperparameter tuning
      </div> */}
      <div>
        <h2 style={{ marginTop: "40px", fontSize: "30px" }}>Model Training Results</h2>
        <hr style={{ marginBottom: "30px" }} />
        <div style={{ marginBottom: "100px" }}>
          {/* <h3 style={{ fontSize: "24px" }}>XGBoost vs Random Forest</h3> */}
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

          <div>
            <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "100px" }}>
              <li>
                When training and testing these models, we saw that the xgboost had a small score
              </li>
              <li>
                improvement over the random forest model. More importantly, the time to train the xgboost model
              </li>
              <li>
                was significantly less than the random forest, which would allow us to explore 
              </li>
              <li>
                more options for hyperparameter tuning.
              </li>
            </ul>
          </div>


          <div>
          <img src={StuffGrade} alt = "Stuff Grade" style={{ width: "100%", height: "auto", maxWidth: "500px", marginLeft: "-50px" }} />
            <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "100px" }}>
              <li>
                Using these grades, we can create plots that show 
              </li>
              <li>
                the impact of various features on the average grade in its bin
              </li>
              <li>
                With these plots, pitchers can explore what they should focus on changing
              </li>
              <li>
                to improve their grades, which should in turn, improve their performance on the field
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};