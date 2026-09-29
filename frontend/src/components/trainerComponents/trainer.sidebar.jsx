import './trainer.sidebar.css'
import logo from '../../assets/logo.png'
// import { useState } from 'react'

export default function TrainerSidebar({selectedPage, setSelectedPage}){
    
    const primaryLinks = [
        'Dashboard',
        'My Courses',
        'My Trainee',
        'Assessment',
        'Certificates',
        'Schedules',
        'Reports',
    ]
    const accountLinks = ['Profile', 'Settings']

    const renderLink = (label) => (
        <button
            key={label}
            type="button"
            className={`sidebarLink${selectedPage === label ? ' active' : ''}`}
            aria-pressed={selectedPage === label}
            onClick={() => setSelectedPage(label)}
        >
            {label}
        </button>
    )

    return(
        <aside className="sidebar">
            <div className="toplogo">
                <img className="logo" src={logo} alt="Capacity Connect" />
            </div>

            <nav className="sidebarLinks" aria-label="Main navigation">
                <div className="sidebarPrimaryLinks">
                    {primaryLinks.map(renderLink)}
                </div>

                <div className="middleSidebar" aria-label="Account navigation">
                    {accountLinks.map(renderLink)}
                </div>
            </nav>

            <div className="sidebarLogOut">
                <button type="button">Logout</button>
            </div>
        </aside>
    )
}