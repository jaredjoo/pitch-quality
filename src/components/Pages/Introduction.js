import React from "react";
import pitch_video1 from "./pitch_video1.mp4";
import pitch_video2 from "./pitch_video2.mp4";

export const Introduction = () => {
  return (
    <div>
      <div style ={{textAlign: 'left', paddingLeft: '170px', marginTop: '-140px'}}>
        <h5>
          Problem
        </h5>
        <ul style ={{fontSize: '30px', paddingLeft: '70px', marginTop: '30px', maxWidth: '1200px'}}>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Given pitch-by-pitch level data, we want to rate the quality of each pitch thrown in the MLB</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>After rating the quality of a pitch, we can group by the pitcher and “grade” pitchers compared to others pitchers in the MLB</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>By analyzing the grades that each pitcher has and how certain variables interact to raise or lower the quality of a pitch, we can then offer individualized recommendations about how they might improve their overall repertoire</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Teams and other independent analysts make varying assumptions about what variables they think makes a pitch good, which leads to differing opinions on the quality of certain pitchers</li>
        </ul>
        {/* <video src="https://www.mlb.com/video/cal-raleigh-strikes-out-swinging-ltlpc3?q=ohtani%20splitter%20strikeouts&cp=MIXED&qt=FREETEXT&p=0" loop autoplay style={{marginTop: '20px', width: '100%', height: 'auto'}}></video> */}


        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", marginBottom:"80px" }}>
          <div style = {{ display: "flex", flexDirection: "column", alignItems: "center", width: "45%", marginLeft: "10px", marginRight: "10px" }}>
            <video src={pitch_video1} loop controls style={{ width: "100%", maxHeight: "400px" }} />
            <p style={{ textAlign: "center", fontSize: "30px" }}>
              An example of a good pitch with a good result
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "45%", marginLeft: "10px", marginRight: "10px" }}>
            <video src={pitch_video2} loop controls style = {{ width: "100%", maxHeight: "400px" }} />
            <p style = {{ textAlign: "center", fontSize: "30px" }}>
              An example of a bad pitch with a bad result
            </p>
          </div>
        </div>


        <h5 style= {{marginTop: '40px'}}>
          Current State of the Art
        </h5>
        <ul style ={{fontSize: '30px', paddingLeft: '70px', marginTop: '30px', maxWidth: '1200px'}}>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>This is largely unknown, as there are not many public facing models that predict the quality of a pitch</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>MLB teams are unable to share their internal models as giving other teams insight into their player evaluation process puts them at a disadvantage</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Some private companies such as Driveline do allow the public to interact with their model, but in a limited way while also not sharing their methodology for creating the model
        </li> 
        </ul>

        <h5 style= {{marginTop: '40px'}}>
          Our Approach
        </h5>
        <ul style ={{fontSize: '30px', paddingLeft: '70px', marginTop: '30px', maxWidth: '1200px', marginBottom: '100px'}}>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Obtain data from the PyBaseball package (specifically the 2020-2022 MLB seasons)</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>State the target variable (delta_run_exp) which measures the change in run value</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Select the 10 important features that will most affect our target variable</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Apply machine learning using an XgBoost model and Random Forest, later deciding the best of the two by comparing execution times and RMSE values</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Using the chosen model, predict the probability of certain events occurring and using linear weights to measure the expected run value of a given pitch</li>
          <li style={{wordWrap: 'break-word', marginBottom: '15px'}}>Analyze our findings using visualizations</li> 
        </ul>
      </div>
    </div>
  );
};
