import "./TimelineCard.css";
import { motion } from "framer-motion";

export default function TimelineCard({ timeline }) {
  return (
    <motion.div
      className="timeline-card"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>📅 AI Daily Timeline</h2>

      {timeline.length === 0 ? (
        <p className="empty-text">
          Click "Optimize My Day" to generate today's schedule.
        </p>
      ) : (
        timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <div className="timeline-time">
              {item.time}
            </div>

            <div className="timeline-task">
              {item.task}
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}