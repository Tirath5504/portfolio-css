import SpotlightCard from '@/components/SpotlightCard';
import Magnet from '@/components/Magnet';
export default function Research() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Research &amp; Publications</h1>
          <p className="section-description">
            Work at the intersection of peer-review transparency, argumentation
            theory, and applied GenAI systems.
          </p>

          <div className="research-grid">
            <SpotlightCard className="research-paper fade-in">
              <div className="paper-accepted">Published</div>
              <h2 className="paper-title">
                Dynamic Optimization of Peer Review Length Using Information
                Density Analysis
              </h2>
              <div className="paper-venue">Scientometrics (Springer) • September 2025</div>
              <p className="paper-description">
                Introduces an information-density framework that balances
                relevance, argumentative strength, and cognitive load to
                optimise peer-review length.
              </p>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://doi.org/10.1007/s11192-025-05416-w" target="_blank" rel="noopener noreferrer" className="project-link">Paper</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://github.com/Tirath5504/OptiReview" target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://huggingface.co/spaces/Tirath5504/Length_Optimization_Peer_Review" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                AntiBug: Runtime-Aware Multimodal Agentic Program Repair for
                Production Applications
              </h2>
              <div className="paper-venue">
                Automated Software Engineering (Special Issue) • April 2026
              </div>
              <p className="paper-description">
                Proposes a novel automated software patching framework using
                multimodal runtime telemetry (stack traces, screenshots) and
                specialized agent orchestration for hypothesis-driven repair.
              </p>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://antibug-survey.vercel.app/benchmark" target="_blank" rel="noopener noreferrer" className="project-link">Website</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://github.com/anon-research-submission/AntiBug" target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                FRAC-MAS: Fracture Radiograph Analysis using Conformal
                Multi-Agent System
              </h2>
              <div className="paper-venue">
                The 2nd Agentic AI for Medicine Workshop at MICCAI 2026 • March 2026
              </div>
              <p className="paper-description">
                Introduces a conformal multi-agent fracture radiograph pipeline
                integrating robust visual models with specialized LLMs, ensuring
                statistically grounded diagnoses for clinical workflow
                integration.
              </p>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://frac-mas.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">Website</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://github.com/anonymous-submission-research/FRAC-MAS" target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://frac-mas.vercel.app/diagnose" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                </Magnet>
              </div>
            </SpotlightCard>



            <SpotlightCard className="research-paper fade-in">
              <div className="paper-accepted">Accepted</div>
              <h2 className="paper-title">
                DigniFy: Multi-Modal Multilingual Online Hate Speech Detection
              </h2>
              <div className="paper-venue">IEEE CONECCT 2026</div>
              <p className="paper-description">
                Presents a theoretical framework and pipeline for multilingual,
                multimodal safety systems with interactive LLM orchestration to
                detect online hate speech.
              </p>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://github.com/IPD-Hate-Speech-Detection/IPD-Hate-Speech-Detection" target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://huggingface.co/spaces/dj-dawgs-ipd/IPD-Video-Pipeline" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="research-paper fade-in">
              <div className="paper-status">Whitepaper</div>
              <h2 className="paper-title">
                Evaluating Large Language Models for Automated Requirement
                Generation in IT Projects
              </h2>
              <div className="paper-venue">
                LinkedIn (Nvelop Technologies Oy)
              </div>
              <p className="paper-description">
                A comprehensive benchmark comparing DeepSeek R1, GPT-4o, Gemini
                2.0, and LLaMA 3.2 on BLEU, Levenshtein, and Jaccard metrics for
                requirement engineering.
              </p>
              <div className="project-links" style={{ marginTop: '1rem' }}>
                <Magnet padding={50} magnetStrength={3}>
                  <a href="https://www.linkedin.com/posts/nvelop-it-whitepaper-on-requirements-generation-ugcPost-7310254420926099456-WwYT" target="_blank" rel="noopener noreferrer" className="project-link">Post</a>
                </Magnet>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="section alt-bg fade-in">
        <div className="container">
          <h2 className="section-title">Achievements &amp; Recognition</h2>
          <div className="achievements-grid">
            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-trophy"></i>
              </div>
              <h3 className="project-title">GATE DS&amp;AI Rank 499</h3>
              <p className="project-description">
                Ranked 499 nationwide among 60,000+ candidates in GATE Data
                Science &amp; AI, demonstrating strong theoretical foundations.
              </p>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-award"></i>
              </div>
              <h3 className="project-title">Amazon ML Challenge Rank 292</h3>
              <p className="project-description">
                Placed 292 out of 70,000+ participants in Amazon ML Challenge
                2024, showcasing applied machine-learning expertise.
              </p>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-code-branch"></i>
              </div>
              <h3 className="project-title">CodeBounty 2024 Winner</h3>
              <p className="project-description">
                Won the flagship competitive programming contest at DJSCE,
                highlighting algorithmic design strengths.
              </p>
            </SpotlightCard>

            {/* <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-shield"></i>
              </div>
              <h3 className="project-title">
                Rajasthan Police Hackathon Finalist
              </h3>
              <p className="project-description">
                Led ML for the finalist solution tackling law-enforcement
                challenges with data-driven citizen feedback analysis.
              </p>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-users-alt"></i>
              </div>
              <h3 className="project-title">sktime Mentoring Program</h3>
              <p className="project-description">
                Selected as a mentee under Dr. Franz Kiraly for the sktime
                mentoring program focused on time-series ML research.
              </p>
            </SpotlightCard> */}
          </div>
        </div>
      </section>
    </main>
  );
}
