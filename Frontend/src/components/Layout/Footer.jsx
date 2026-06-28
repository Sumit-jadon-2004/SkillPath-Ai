import { Link } from "react-router-dom";
import { FiZap, FiGithub, FiTwitter } from "react-icons/fi";
import '../../Styles/Footer.css';
import { LuZap } from "react-icons/lu";
function Footer() {
  return (
    <footer
      style={{
        background: "#fafafa",
        borderTop: "1px solid #e5e7eb",
        padding: "80px 0 30px",
      }}
    >
      <div className="card-container px-4">
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "50px",
            marginBottom: "50px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              <LuZap className="logo-icon" style={{height:'20px'}}/>
              <span>
                SkillPath <span className="Gredent-Color">AI</span>
              </span>
            </div>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
              }}
            >
              AI-powered personalized learning for every student. Aligned with
              UN SDG 4 — Quality Education.
            </p>
          </div>

          <div>
            <h4
              style={{
                marginBottom: "18px",
                fontSize: "15px",
                fontWeight: "700",
                color: "#6b7280",
                textTransform: "uppercase",
              }}
            >
              Platform
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#6b7280" }}>
                Home
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#6b7280" }}
              >
                About
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#6b7280" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#6b7280" }}
              >
                Register
              </Link>
            </div>
          </div>

          <div>
            <h4
              style={{
                marginBottom: "18px",
                fontSize: "15px",
                fontWeight: "700",
                color: "#6b7280",
                textTransform: "uppercase",
              }}
            >
              SDG 4
            </h4>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
              }}
            >
              Ensure inclusive and equitable quality education and promote
              lifelong learning opportunities for all.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p style={{ color: "#6b7280" }}>
            © 2026 SkillPath AI. Built with ❤️ for SDG 4.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "24px",
            }}
          >
            <a href="#" style={{ color: "#6b7280" }}>
              <FiGithub />
            </a>

            <a href="#" style={{ color: "#6b7280" }}>
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;