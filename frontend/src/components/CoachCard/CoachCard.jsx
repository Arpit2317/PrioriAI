import "./CoachCard.css";
import { motion } from "framer-motion";

export default function CoachCard({ aiResult }) {
  return (
    <motion.div
      className="coach-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -3 }}
    >
      <h2>🤖 AI Coach</h2>

      <div className="coach-message">
        <p>{aiResult.coachTip}</p>

        <br />

        <strong>
          Productivity Score: {aiResult.productivityScore}%
        </strong>
      </div>
    </motion.div>
  );
}