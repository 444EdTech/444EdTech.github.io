import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './NavbarComponent';
import LandingPage from './LandingPage';
import Footer from './Footer';
import CareerAwarenessProgram from './CareerAwarenessProgram';
import PersonalizedCareerWorkshops from './PersonalizedCareerWorkshops';
import DataScienceCoursePage from './DataScienceCoursePage';
import DSACoursePage from './DSACoursePage';
import FullStackProgramPage from './FullStackProgramPage';
import ITIndustryCoursePage from './ITIndustryCoursePage';
import RegistrationPage from './RegistrationPage';
import ConnectionRequest from './ConnectionRequest';
import AwarenessPrograms from './AwarenessPrograms';
import Founders from './Founders';
import ContactUs from './ContactUs';
import SendRequest from './SendRequest';
import Connect from './Connect';
// import ChatGPT from './ChatGPT';
// import ChatWidget from './ChatWidget';
import AlumniApp from './AlumniApp';
import PaymentLink from './PaymentLink';
import LandingPage1 from './LandingPage1';
import LandingPage2 from './LandingPage2';

function App() {
  return (

    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/L1" element={<LandingPage1 />} />
          
          <Route path="/L2" element={<LandingPage2 />} />

          {/* <Route path="/ChatGPT" element={<ChatGPT />} />

          <Route path="/ChatWidget" element={<ChatWidget />} /> */}

          <Route path="/Connect" element={<Connect />} />

          <Route path="/AlumniApp" element={<AlumniApp />} />


          <Route path="/AwarenessPrograms" element={<AwarenessPrograms />} />

          <Route path="/Founders" element={<Founders />} />

          <Route path="/ContactUs" element={<ContactUs />} />


          <Route path="/Connection-request" element={<ConnectionRequest />} />

          <Route path="/SendRequest" element={<SendRequest />} />

          <Route path="/PaymentLink" element={<PaymentLink />} />

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
        
        {/* <ChatWidget /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
