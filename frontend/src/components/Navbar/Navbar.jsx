import "./Navbar.css";
import {
  BrainCircuit,
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Left */}

      <div className="navbar-left">

        <div className="logo-box">
          <BrainCircuit size={30} />
        </div>

        <div>

          <h2>PrioriAI</h2>

          <p>AI Productivity Assistant</p>

        </div>

      </div>

      {/* Center */}

      <div className="navbar-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search tasks..."
        />

      </div>

      {/* Right */}

      <div className="navbar-right">

        <button className="notification-btn">

          <Bell size={20} />

        </button>

        <button className="ai-btn">

          <Sparkles size={18} />

          AI Active

        </button>

        <div className="profile">

          <div className="avatar">
            U
          </div>

          <div>

            <h4>User</h4>

            <span>Productivity Mode</span>

          </div>

        </div>

      </div>

    </nav>
  );
}