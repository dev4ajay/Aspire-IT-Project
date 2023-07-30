import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import EnquireNow from "./Components/EnquireNow";
import Clc from "./Components/Clc";
import Message from "./Components/Message";
import SystemandAdministration from './Components/SystemandAdministration'
import CLCHistory from "./Components/ClcHistory";
import Neet from "./Components/Neet";
import Jee from "./Components/Jee";
import PreFoundation from "./Components/PreFoundation";

import ClcLocations from "./Components/ClcLocations";
import GeneralEnquiry from "./Components/GeneralEnquiry";
import StudentsHelp from "./Components/StudentsHelp";
import FirstRank from "./Components/FirstRank";
import CLCiansColleges from "./Components/CLCiansColleges";
import DistanceLearningProgramme from "./Components/DistanceLearningProgramme";
import GalleryVideo from "./Components/GalleryVideo";
import GalleryPhoto from "./Components/GalleryPhoto";
import Career from "./Components/Career";
import Fees from "./Components/Fees";
import HowToApply from "./Components/HowTOApply";
import Scholarship from "./Components/Scholarship";
import Terms from "./Components/Terms";
import OfflineMinor from "./Components/OfflineMinor";
import ExamSolution from "./Components/ExamSolution";
import UsefulLink from "./Components/UsefulLink";


const App = () => {
  return (
    <>
      <BrowserRouter>
     
        <EnquireNow />
        <Routes>
     
          <Route path="/" element={<Home />} />
          <Route path="/Clc" element={<Clc />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/SystemAdministration" element={<SystemandAdministration />} />
          <Route path="/CLCHistory" element={<CLCHistory />} />
          <Route path="/NEET" element={<Neet />} />
          <Route path="/JEE" element={<Jee />} />
          <Route path="/Pre-Foundation" element={<PreFoundation />} />
          <Route path="/Distance-Learning-Programme" element={<DistanceLearningProgramme/>} />
          <Route path="/ClcLocations" element={<ClcLocations />}/>
          <Route path="/GeneralEnquiry" element={<GeneralEnquiry/>} />
          <Route path="/StudentsHelp" element={<StudentsHelp />}/>
          <Route path="/First-Rank-Achievements" element={<FirstRank/>}/>
          <Route path="/CLCians-Colleges-Intake" element={<CLCiansColleges/>}/>
          <Route path="/Photo" element={<GalleryPhoto />}/>
          <Route path="/Video" element={<GalleryVideo />}/>
          <Route path="/Career" element={<Career />}/>
          <Route path="/HowToApply" element={<HowToApply/>}/>
          <Route path="/Fees" element={<Fees/>}/>
          <Route path="/Scholarship" element={<Scholarship/>}/>
          <Route path="/Terms-Condition" element={<Terms/>}/>
          <Route path="/Offline-Minor" element={<OfflineMinor/>}/>
          <Route path="/Exam-Solutions" element={<ExamSolution/>}/>
          <Route path="/Useful-Links" element={<UsefulLink/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
