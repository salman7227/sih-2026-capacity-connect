import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import LoginPage from './pages/loginPage';
// import Login from './components/login';
// import Register from './components/register';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} /> {/* <-- ye page krna sohail */}
            <Route path='/login' element={<LoginPage />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
