import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Register from './pages/register';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} /> {/* <-- ye page krna sohail */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
