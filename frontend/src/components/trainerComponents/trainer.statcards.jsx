import "./trainer.statcards.css";

const StatCard = ({
  icon,
  title,
  value,
  change,
  description,
  positive = true,
}) => {
  return (
    <div className="stat-card">

      {/* Icon */}
      <div className="stat-icon">
        {icon}
      </div>

      {/* Content */}
      <div className="stat-content">

        <p className="stat-title">
          {title}
        </p>

        <div className="stat-value-row">

          <h2 className="stat-value">
            {value}
          </h2>

          <span
            className={`stat-change ${
              positive ? "positive" : "negative"
            }`}
          >
            {positive ? "↑" : "↓"} {change}
          </span>

        </div>

        <p className="stat-description">
          {description}
        </p>

      </div>

    </div>
  );
};

export default StatCard;