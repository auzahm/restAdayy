import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/Signup/singup";
import Language from './pages/language/language';
import Forgot from './pages/forgot-pass/forgot';
import SendCode from "./pages/send-code-verfication/send_code"
import VerificationCode from './pages/verification_code/verificationCode';
import NewPassword from './pages/new-password/newPassword';

function App():React.ReactElement {
  

  return (
    <>
      <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/login" element={<Login/>}  />
            <Route path="/signup" element={<SignUp/>}  />
            <Route path="/language" element={<Language/>}  />
            <Route path="/forgot-password" element={<Forgot/>}  />
            <Route path="/send-code-to" element={<SendCode/>}  />
            <Route path="/verification-code" element={<VerificationCode/>}  />
            <Route path="/newpassword" element={<NewPassword/>}  />
        </Routes>
    </Router>
        </div>
            </>
  )
}

export default App;
