import './trainer.navbar.css'

export default function TrainerNavbar(){
    return (
        <header className="trainerNavbar">
            <label className="trainerSearch">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="10.8" cy="10.8" r="6.3" />
                    <path d="m15.5 15.5 4.2 4.2" />
                </svg>
                <input type="search" placeholder="Search for courses, assessments, or trainees..." aria-label="Search" />
            </label>

            <div className="trainerNavbarActions">
                <button className="trainerNotifications" type="button" aria-label="Notifications">
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
                    </svg>
                    <span className="notificationIndicator" />
                </button>
                <span className="trainerNavbarDivider" aria-hidden="true" />
                <button className="trainerProfile" type="button" aria-label="Mayank Sharma, Trainer">
                    <img
                        className="trainerAvatar"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80"
                        alt=""
                    />
                    <span className="trainerProfileText">
                        <span className="trainerName">Mayank Sharma</span>
                        <span className="trainerRole">Trainer</span>
                    </span>
                    <svg className="trainerProfileChevron" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="m7 10 5 5 5-5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}