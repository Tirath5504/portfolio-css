import LogoLoop from "@/components/LogoLoop";

const techStackLogos = [
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PyTorch</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Hugging Face</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PEFT / LoRA</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>LangChain</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>scikit-learn</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>OpenCV</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>FastAPI</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Docker</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Weights & Biases</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Git/GitHub</span> }
];

import ElectricBorder from "@/components/ElectricBorder";

export default function About() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <ElectricBorder borderRadius={30} color="var(--highlight)" style={{ marginBottom: "4rem" }}>
            <div style={{ position: "relative", padding: "3rem", background: "var(--glass-bg)", borderRadius: "30px", border: "1px solid var(--highlight)", boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)" }}>
              <p className="section-description" style={{ fontSize: "1.25rem", color: "var(--primary-text)", maxWidth: "100%", textAlign: "left" }}>
                Hi, I'm <strong style={{ color: "var(--highlight)" }}>Tirath</strong>, an incoming MS in AI graduate student at Universiteit van Amsterdam. My work focuses on building practical tools around LLMs and multimodal AI systems.
              </p>
              <p className="section-description" style={{ marginTop: "1.5rem", maxWidth: "100%", textAlign: "left" }}>
                I am especially drawn toward problems where engineering, research, and human judgment intersect. What excites me most about AI is the possibility of building systems that augment human thinking: helping people reason better, review information more carefully, and navigate complex decisions transparently. I enjoy turning messy, ambiguous research ideas into robust systems.
              </p>
            </div>
          </ElectricBorder>

          <div style={{ marginTop: "4rem" }}>
            <h2 style={{ fontSize: "1.8rem", color: "var(--primary-text)", marginBottom: "2rem", borderBottom: "2px solid var(--highlight)", display: "inline-block", paddingBottom: "0.5rem" }}>
              <i className="uil uil-arrow-growth"></i> Current Focus
            </h2>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
              {["Multi-agent systems for scientific workflows", "Retrieval + argumentation-based reasoning systems", "AI systems that improve research peer review and evaluation"].map((item, i) => (
                <li key={i} style={{ padding: "1rem 1.5rem", background: "var(--secondary-bg)", borderRadius: "15px", color: "var(--secondary-text)", borderLeft: "4px solid var(--highlight)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>



          {/* <h2 className="section-title" style={{ marginTop: "6rem", fontSize: "2.5rem" }}>Beyond Work</h2>
          <div className="timeline" style={{ marginTop: "3rem" }}>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ color: "var(--highlight)" }}>Mentoring</h3>
                <p className="timeline-description">
                  As Research Head at DJSCE ACM, I established a personalized mentoring program for 15+ students, successfully placing 5 mentees in competitive research internships through targeted guidance in domain-specific learning and academic paper writing.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ color: "var(--highlight)" }}>Mumbai / City Life</h3>
                <p className="timeline-description">
                  Growing up in Mumbai shaped a lot of how I think — fast-paced, adaptive, slightly chaotic, but deeply energetic. I enjoy exploring the city through cafés, old neighborhoods, and conversations with people from completely different backgrounds.
                </p>
              </div>
            </div>

          </div> */}



          <div style={{ marginTop: "8rem", marginBottom: "2rem", width: "100%", overflow: "hidden" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Tech Stack I’m Loving</h2>
            <LogoLoop logos={techStackLogos} speed={50} direction="left" />
            <div style={{ marginTop: "2rem" }}>
              <LogoLoop logos={techStackLogos.slice().reverse()} speed={50} direction="right" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
