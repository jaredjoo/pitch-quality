import React from "react";

export const Introduction = () => {
  return (
    
    <div style={{textAlign: 'left', paddingLeft: '235px', marginTop: '-100px'}}>
      <h4>
        Problem
      </h4>
      <ul style={{fontSize: '30px', paddingLeft: '70px', marginTop: '30px', maxWidth: '1200px'}}>
        <li style={{wordWrap: 'break-word'}}>Given pitch-by-pitch level data, we want to rate the quality of each pitch thrown in the MLB</li>
        <li style={{wordWrap: 'break-word'}}>After rating the quality of a pitch, we can group by the pitcher and “grade” pitchers compared to others pitchers in the MLB</li>
        <li style={{wordWrap: 'break-word'}}>By analyzing the grades that each pitcher has and how certain variables interact to raise or lower the quality of a pitch, we can then offer individualized recommendations about how they might improve their overall repertoire</li>
      </ul>
      {/* <video src="https://www.mlb.com/video/cal-raleigh-strikes-out-swinging-ltlpc3?q=ohtani%20splitter%20strikeouts&cp=MIXED&qt=FREETEXT&p=0" loop autoplay style={{marginTop: '20px', width: '100%', height: 'auto'}}></video> */}
      <h4 style= {{marginTop: '40px'}}>
        Current State of the art
      </h4>
      <ul style={{fontSize: '30px', paddingLeft: '70px', marginTop: '30px', maxWidth: '1200px'}}>
        <li style={{wordWrap: 'break-word'}}>This is largely unknown, as there are not many public facing models that predict the quality of a pitch</li>
        <li style={{wordWrap: 'break-word'}}>MLB teams are unable to share their internal models as giving other teams insight into their player evaluation process puts them at a disadvantage</li>
        <li style={{wordWrap: 'break-word'}}>Some private companies such as Driveline do allow the public to interact with their model, but in a limited way while also not sharing their methodology for creating the model
      </li> 
      </ul>
    </div>

  );
};
