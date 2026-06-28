import "./TaskList.css";
import { motion } from "framer-motion";

export default function TaskList({ tasks, onToggleComplete }) {
  function getPriorityClass(priority) {
    switch (priority.toLowerCase()) {
      case "high":
        return "priority high";
      case "medium":
        return "priority medium";
      case "low":
        return "priority low";
      default:
        return "priority";
    }
  }

  return (
    <div className="task-card">
      <div className="task-header">
        <h2>📋 Today's Tasks</h2>

        <span className="task-count">
          {tasks.length} Tasks
        </span>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            🎉 No tasks yet!
            <p>Add a task to get started.</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <motion.div
              key={task.id}
              className={`task-item ${
                task.completed ? "completed" : ""
              }`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.01,
              }}
            >
              <div className="task-left">
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => onToggleComplete(task.id)}
                />

                <div className="task-info">
                  <h4>{task.title}</h4>

                  <div className="task-meta">
                    <span className="deadline">
                      ⏰ {task.deadline}
                    </span>

                    <span className="duration">
                      🕒 {task.duration}
                    </span>
                  </div>
                </div>
              </div>

              <span className={getPriorityClass(task.priority)}>
                {task.priority}
              </span>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}