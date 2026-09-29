import './trainer.dashboard.css'
import TrainerSidebar from '../../components/trainerComponents/trainer.sidebar.jsx'
import TrainerNavbar from '../../components/trainerComponents/trainer.navbar.jsx'
import WelcomeBanner from '../../components/trainerComponents/trainer.welcomeBanner.jsx'
import DashboardStats from '../../components/trainerComponents/trainer.dashboardStats.jsx'
import { useState } from 'react'

export default function TrainerDashboardPage(){
    const [selectedPage, setSelectedPage] = useState('Dashboard')
    return(
        <div className="trainerDashboard">
            <TrainerSidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <main className="trainerDashboardMain">
                <TrainerNavbar selectedPage={selectedPage}/>
                <WelcomeBanner />
                <DashboardStats/>
            </main>

        </div>
    )
}