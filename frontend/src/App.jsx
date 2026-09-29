import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Public-Pages/landingPage';
import LoginPage from './pages/Public-Pages/loginPage';
import ForgotPassword from './pages/Public-Pages/forgetPassword';
import TrainerDashboardPage from './pages/Trainer/trainer.dashboard';
import Dashboard from './pages/Admin/Dashboard';
import AdminLayout from './pages/Admin/AdminLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/trainer/dashboard' element={<TrainerDashboardPage />} />

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App