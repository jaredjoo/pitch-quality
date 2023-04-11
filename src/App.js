import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Introduction } from "./components/Pages/Introduction";
import { FeatureEngineering } from "./components/Pages/FeatureEngineering";
import { MachineLearning } from "./components/Pages/MachineLearning";
import { Results } from "./components/Pages/Results";
import { References } from "./components/Pages/References";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/featureengineering" element={<FeatureEngineering />} />
            <Route path="/machinelearning" element={<MachineLearning />} />
            <Route path="/results" element={<Results />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
