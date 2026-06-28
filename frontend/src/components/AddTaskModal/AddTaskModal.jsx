import { useState } from "react";
import "./AddTaskModal.css";

export default function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
}) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [duration, setDuration] = useState("");

  if (!isOpen) return null;

  function handleSave() {
    if (!title || !deadline || !duration) {
      alert("Please fill all required fields.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      deadline,
      priority,
      duration,
    };

    onAddTask(newTask);

    setTitle("");
    setDeadline("");
    setPriority("Medium");
    setDuration("");

    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={deadline}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="time"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <div className="modal-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Task
          </button>

        </div>

      </div>
    </div>
  );
}