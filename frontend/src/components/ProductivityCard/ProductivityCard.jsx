import "./ProductivityCard.css";

export default function ProductivityCard({ aiResult }) {
  const score = aiResult.productivityScore || "--";

  let status = "Waiting for AI";
  let color = "#94a3b8";

  if (score >= 90) {
    status = "Excellent 🚀";
    color = "#22c55e";
  } else if (score >= 75) {
    status = "Very Good 🔥";
    color = "#3b82f6";
  } else if (score >= 60) {
    status = "Good 👍";
    color = "#f59e0b";
  } else if (score !== "--") {
    status = "Needs Improvement";
    color = "#ef4444";
  }

  return (
    <div className="productivity-card">

      <div className="productivity-header">
        <h3>📊 Productivity</h3>
      </div>

      <div className="score-container">

        <div
          className="score-circle"
          style={{
            borderColor: color,
            color: color,
          }}
        >
          {score}
        </div>

        <h2
          className="score-status"
          style={{ color }}
        >
          {status}
        </h2>

      </div>

      <p className="score-description">
        Your AI-generated productivity score based on your current tasks,
        priorities and deadlines.
      </p>

    </div>
  );
}