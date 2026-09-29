import './trainer.dashboard.css'
import TrainerSidebar from '../../components/trainerComponents/trainer.sidebar.jsx'
import { useState } from 'react'

export default function TrainerDashboardPage(){
    const [selectedPage, setSelectedPage] = useState('Dashboard')
    return(
        <>
            <TrainerSidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

        </>
    )
}