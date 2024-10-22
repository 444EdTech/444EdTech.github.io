import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavbarComponent from './NavbarComponent';
import AboutUs from './AboutUs';
import LandingPage from './LandingPage';
import Footer from './Footer';
import CareerAwarenessProgram from './CareerAwarenessProgram';
import PersonalizedCareerWorkshops from './PersonalizedCareerWorkshops';
import DataScienceCoursePage from './DataScienceCoursePage';
import DSACoursePage from './DSACoursePage';
import FullStackProgramPage from './FullStackProgramPage';
import ITIndustryCoursePage from './ITIndustryCoursePage';
import RegistrationPage from './RegistrationPage';
import Connect from './Connect';
import ConnectionRequest from './ConnectionRequest';

function App() {
  return (

    <Router>
      <div className="App">
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/Connect" element={<Connect />} />
          <Route path="/Connection-request" element={<ConnectionRequest />} />
        </Routes>
        
        <Routes>
          <Route path="/CareerAwarenessProgram" element={<CareerAwarenessProgram />} />
          <Route path="/ITIndustryCoursePage" element={<ITIndustryCoursePage />} />
          <Route path="/PersonalizedCareerWorkshops" element={<PersonalizedCareerWorkshops />} /> 
          <Route path="/PersonalizedCareerWorkshops/DataScienceCoursePage" element={<DataScienceCoursePage />} /> 
          <Route path="/PersonalizedCareerWorkshops/FullStackCoursePage" element={<FullStackProgramPage />} />  
          <Route path="/PersonalizedCareerWorkshops/DSACoursePage" element={<DSACoursePage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
