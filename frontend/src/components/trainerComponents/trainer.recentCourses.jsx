import './trainer.recentCourses.css'

const recentCourses = [
    {
        name: 'React.js Fundamentals',
        category: 'Web Development',
        trainees: 48,
        updated: '5 Sep 2026',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=160&h=112&q=80',
        imageAlt: 'React code on a screen',
        tone: 'react',
    },
    {
        name: 'Python for Data Analysis',
        category: 'Data Science',
        trainees: 32,
        updated: '2 Sep 2026',
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=160&h=112&q=80',
        imageAlt: 'Python programming on a screen',
        tone: 'python',
    },
    {
        name: 'Database Management Systems',
        category: 'Database',
        trainees: 28,
        updated: '28 Aug 2026',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=160&h=112&q=80',
        imageAlt: 'Database server infrastructure',
        tone: 'database',
    },
    {
        name: 'Web Development Basics',
        category: 'Web Development',
        trainees: 25,
        updated: '20 Aug 2026',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&h=112&q=80',
        imageAlt: 'Laptop displaying a web development workspace',
        tone: 'web',
    },
]

export default function TrainerRecentCourses() {
    return (
        <section className="recentCoursesContainer" aria-labelledby="recent-courses-title">
            <div className="recentCoursesHeader">
                <h2 id="recent-courses-title">My Recent Courses</h2>
                <a className="recentCoursesViewAll" href="/trainer/mycourses">
                    View all <span aria-hidden="true">→</span>
                </a>
            </div>

            <div className="recentCoursesList">
                {recentCourses.map((course) => (
                    <article className="recentCourse" key={course.name}>
                        <div className={`recentCourseThumbnail ${course.tone}`}>
                            <img src={course.image} alt={course.imageAlt} loading="lazy" />
                        </div>
                        <div className="recentCourseDetails">
                            <div className="recentCourseTitleLine">
                                <h3>{course.name}</h3>
                                <span className={`recentCourseCategory ${course.tone}`}>
                                    {course.category}
                                </span>
                            </div>
                            <p>{course.trainees} Trainees <span aria-hidden="true">·</span> Last updated {course.updated}</p>
                        </div>
                        <button className="recentCourseMenu" type="button" aria-label={`More options for ${course.name}`}>
                            <span aria-hidden="true">···</span>
                        </button>
                    </article>
                ))}
            </div>
        </section>
    )
}