import "./RecommendationCard.css";
import { motion } from "framer-motion";

export default function RecommendationCard({ aiResult }) {
  return (
    <motion.div
      className="recommendation-card"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="card-header">
        <span className="ai-icon">🧠</span>
        <h2>AI Mission Control</h2>
      </div>

      <h3>{aiResult.nextAction}</h3>

      <div className="reason-box">
        <strong>Why?</strong>
        <p>{aiResult.reason}</p>
      </div>
    </motion.div>
  );
}