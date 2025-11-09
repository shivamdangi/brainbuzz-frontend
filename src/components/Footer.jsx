"use client"
import "./Footer.css"

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid grid-4">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              BrainBuzz Academy is dedicated to providing quality education and personalized tutoring for students of all classes.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => setCurrentPage("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("explore")}>Explore Teachers</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("platform")}>Platform</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("contact")}>Contact Us</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="mailto:superbshivam123@gmail.com">Email Support</a>
              </li>
              <li>
                <a href="#contact">Contact Form</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 BrainBuzz Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
