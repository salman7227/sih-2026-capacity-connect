import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import LoginPage from './pages/Public-Pages/loginPage';
import ForgotPassword from './pages/Public-Pages/forgetPassword';
import TraineeDashboard from './pages/Trainee/TraineeDashboard';
// import Login from './components/login';
// import Register from './components/register';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} /> {/* <-- ye page krna sohail */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/trainee' element={<TraineeDashboard />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
