import './trainer.quickAction.css'
import {useNavigate} from 'react-router-dom'

const actions = [
    {
        label: 'Create Course',
        path: 'M4 5h7l2 2h7v12H4z M8 13h8 M12 9v8',
        url: '/trainer/mycourses'
    },
    {
        label: 'Create Assessment',
        path: 'M8 4h8v3H8z M7 6H5v14h14V6h-2 M8 12h8 M8 16h5',
        url: '/trainer/assessments'
    },
    {
        label: 'Schedule Session',
        path: 'M5 4v3 M19 4v3 M4 8h16 M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1z M8 12h3v3H8z',
        url: '/trainer/schedules'
    },
    {
        label: 'View Reports',
        path: 'M4 19h16 M6 16v-5h3v5 M11 16V7h3v9 M16 16V4h3v12',
        url: '/trainer/reports'
    },
]

export default function TrainerQuickAction() {
    const navigate = useNavigate()

    const handleClick = (url)=> {navigate(url)}
    return (
        <section className="quickActionContainer" aria-labelledby="quick-actions-title">
            <h2 id="quick-actions-title">Quick Actions</h2>
            <div className="quickActionGrid">
                {actions.map((action) => (
                    <button className="quickActionButton" onClick={() => handleClick(action.url)} key={action.label} type="button">
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path d={action.path} />
                        </svg>
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}