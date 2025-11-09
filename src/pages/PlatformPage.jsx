import "./PlatformPage.css"
import { BrainCircuit } from "lucide-react"

function PlatformPage() {
  return (
    <div className="platform-page">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
          <BrainCircuit size={48} />

          </div>
          <h1>Platform Coming Soon</h1>
          <p>
            We're working hard to bring you an amazing learning platform with interactive classes, real-time
            collaboration, and personalized learning paths.
          </p>

          <div className="features-preview">
            <h3>What's Coming:</h3>
            <ul>
              <li>✓ Live Interactive Classes</li>
              <li>✓ Personalized Learning Dashboard</li>
              <li>✓ Real-time Doubt Solving</li>
              <li>✓ Performance Analytics</li>
              <li>✓ Assignment & Test Management</li>
              <li>✓ Peer Collaboration Tools</li>
            </ul>
          </div>

          <form className="notify-form">
            <input type="email" placeholder="Enter your email to be notified" required />
            <button type="submit" className="btn-primary">
              Notify Me
            </button>
          </form>

          <p className="launch-text">Expected Launch: Q2 2025</p>
        </div>
      </div>
    </div>
  )
}

export default PlatformPage
