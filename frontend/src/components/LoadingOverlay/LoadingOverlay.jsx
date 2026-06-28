import "./LoadingOverlay.css";

export default function LoadingOverlay() {
  return (
    <div className="loading-overlay">
      <div className="loading-box">

        <h1>🧠 PrioriAI</h1>

        <p>Building your perfect day...</p>

        <div className="loader"></div>

        <span>Analyzing tasks...</span>

      </div>
    </div>
  );
}