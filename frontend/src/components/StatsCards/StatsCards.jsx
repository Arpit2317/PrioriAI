import "./StatsCards.css";
import { motion } from "framer-motion";
import {
  ListTodo,
  Flame,
  CalendarDays,
  BrainCircuit,
} from "lucide-react";

export default function StatsCards({
  tasks,
  productivityScore,
}) {
  const totalTasks = tasks.length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const dueToday = tasks.filter(
    (task) => task.deadline === "Today"
  ).length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <ListTodo size={28} />,
      color: "#3b82f6",
    },
    {
      title: "High Priority",
      value: highPriority,
      icon: <Flame size={28} />,
      color: "#ef4444",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CalendarDays size={28} />,
      color: "#10b981",
    },
    {
      title: "AI Score",
      value: `${productivityScore}%`,
      icon: <BrainCircuit size={28} />,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="stat-card"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.12,
            duration: 0.45,
          }}
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
        >
          <div
            className="stat-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}