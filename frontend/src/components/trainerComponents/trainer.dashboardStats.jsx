import StatCard from "./trainer.statcards.jsx";
import "./trainer.dashboardStats.css";

const DashboardStats = () => {

  const stats = [
    {
      icon: "👥",
      title: "My Trainees",
      value: "38",
      change: "12%",
      description: "Active this semester",
    },

    {
      icon: "📖",
      title: "My Courses",
      value: "8",
      change: "2",
      description: "Published courses",
    },

    {
      icon: "☑",
      title: "Assessments Created",
      value: "24",
      change: "15%",
      description: "Quizzes & Tests",
    },

    {
      icon: "⭐",
      title: "Average Performance",
      value: "78%",
      change: "6%",
      description: "Across all trainees",
    },
  ];


  return (
    <div className="dashboard-stats">

      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          description={stat.description}
        />
      ))}

    </div>
  );
};

export default DashboardStats;