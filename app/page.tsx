import Link from "next/link";
import TypewriterEffect from "@/components/TypewriterEffect";
import CountUp from "@/components/CountUp";
import LogoLoop from "@/components/LogoLoop";
import ElectricBorder from "@/components/ElectricBorder";

const techStackLogos = [
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PyTorch</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Hugging Face</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PEFT / LoRA</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>LangChain</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>LangGraph</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>LangSmith</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>scikit-learn</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>OpenCV</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>FastAPI</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Docker</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Playwright</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Git/GitHub</span> }
];

export default function Home() {
  return (
    <main>
      <section className="hero fade-in">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tirath Bhathawala</h1>
            <p className="subtitle">
              I&apos;m <TypewriterEffect />
            </p>
            <p className="hero-description">
              Incoming MS in AI at UvA, specializing in Agentic Systems.
              <br />
              <span
                style={{
                  color: "var(--highlight)",
                  fontWeight: 500,
                  display: "inline-block",
                  marginTop: "10px",
                }}
              >
                Actively seeking Summer 2027 AI/MLE Internships.
              </span>
            </p>

            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                <i className="uil uil-envelope"></i> Get In Touch
              </Link>
              <a
                href="https://shorturl.at/DugCC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="uil uil-file-download"></i> View Resume
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tirath-bhathawala/"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/Tirath5504"
                className="social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=xjNDI7AAAAAJ"
                className="social-link"
                aria-label="Google Scholar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai ai-google-scholar-square"></i>
              </a>
              <Link href="/blogs" className="social-link" aria-label="Blog">
                <i className="uil uil-blogger"></i>
              </Link>
              <a
                href="https://www.instagram.com/04_tirath/"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src="/img/tirath_profile_img.jpeg" alt="Tirath Bhathawala" />
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container">
          <ElectricBorder borderRadius={30} color="var(--highlight)" style={{ marginBottom: "0" }}>
            <div style={{ position: "relative", padding: "3rem", background: "var(--glass-bg)", borderRadius: "30px", border: "1px solid var(--highlight)", boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)" }}>
              <p className="section-description" style={{ fontSize: "1.25rem", color: "var(--primary-text)", maxWidth: "100%", textAlign: "center", marginBottom: 0 }}>
                Currently pursuing an MS in Artificial Intelligence at the University of Amsterdam, with a research focus on multi-agent systems and clinical ML. When I am not orchestrating LangGraph pipelines or optimizing C++ transpilers, you will usually find me navigating the city on my Swapfiets or catching an FC Barcelona match.
              </p>
            </div>
          </ElectricBorder>
        </div>
      </section>

      <section className="section alt-bg fade-in">
        <div className="container">
          <h2 className="section-title">Highlights</h2>
          <p className="section-description">
            Quick stats that capture my journey across competitive exams,
            academics, research, and industry collaborations.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <CountUp from={0} to={499} className="stat-number" duration={2} />
              <div className="stat-label">
                GATE DS&amp;AI Rank (out of 60,000+)
              </div>
            </div>
            <div className="stat-item">
              <CountUp
                from={0}
                to={9.32}
                className="stat-number"
                duration={2}
              />
              <div className="stat-label">
                CGPA (B.Tech Comp Engg with Honors in Intelligent Computing)
              </div>
            </div>
            <div className="stat-item">
              <CountUp from={0} to={5} className="stat-number" duration={2} />
              <div className="stat-label">
                Research Papers &amp; Whitepapers
              </div>
            </div>
            <div className="stat-item">
              <CountUp from={0} to={5} className="stat-number" duration={2} />
              <div className="stat-label">
                Research &amp; Industry Internships
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container" style={{ width: "100%", overflow: "hidden" }}>
          <h2 className="section-title" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Tech Stack I’m Loving</h2>
          <LogoLoop logos={techStackLogos} speed={50} direction="left" />
          <div style={{ marginTop: "2rem" }}>
            <LogoLoop logos={techStackLogos.slice().reverse()} speed={50} direction="right" />
          </div>
        </div>
      </section>
    </main>
  );
}
