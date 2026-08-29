import SpotlightCard from '@/components/SpotlightCard';

export default function Projects() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-description">
            Selected work spanning multimodal hate-speech detection, civic-tech
            analytics, and computer-vision healthcare applied with end-to-end
            product thinking.
          </p>

          <div className="projects-grid">
            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-bug"></i>
              </div>
              <h2 className="project-title">AntiBug</h2>
              <p className="project-description">
                <strong>Runtime-Aware Multimodal Agentic Program Repair</strong>
                <br /> Architected a 12-agent LangGraph pipeline that ingests
                source-map-resolved stack traces, user-event context, and automatic DOM screenshots.
                Automates root-cause diagnosis, hypothesis validation, and
                SDK-integrated patch synthesis. Evaluated on 69 real-world
                production bugs from Cal.com and Appsmith, fixing 32/69 issues (vs 9/69 for
                GPT-4o) and achieved a 72.50% human preference rate across 549 blind A/B evaluations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">LangGraph</span>
                <span className="tech-tag">LangSmith</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
              </div>
              <div className="project-links">
                  <a
                    href="https://antibug-survey.vercel.app/benchmark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Benchmark Results Website
                  </a>
                  <a
                    href="https://github.com/anon-research-submission/AntiBug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://shorturl.at/kX1oy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Paper
                  </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-medkit"></i>
              </div>
              <h2 className="project-title">FRAC-MAS</h2>
              <p className="project-description">
                <strong>A Safe and Explainable Multi-Agent System for Fracture Diagnosis</strong>
                <br /> Engineered a clinical decision support system integrating
                a 4-model vision ensemble (MaxViT, RAD-DINO, YOLO, DenseNet)
                with specialized LLM agents. Implemented conformal prediction to
                generate statistically grounded differential diagnoses for
                X-rays (92.0% empirical coverage). Stacking achieved a 96.4% detection rate on an external dataset.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Grad-CAM</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Multi-Agent</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
              <div className="project-links">
                  <a
                    href="https://frac-mas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Website
                  </a>
                  <a
                    href="https://github.com/anonymous-submission-research/FRAC-MAS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://frac-mas.vercel.app/diagnose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://shorturl.at/PwEVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Paper
                  </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-shield-check"></i>
              </div>
              <h2 className="project-title">DigniFy</h2>
              <p className="project-description">
                <strong>Multi-Modal Multilingual Hate Speech Detection</strong>
                <br /> Engineered a mobile application pipeline with
                DistilRoBERTa for text, OCR for image extraction, and STT-TTS
                for audio. Features an AI Agent integrating all
                modality-specific models as tools, orchestrating interaction
                across four LLMs (DeepSeek R1, GPT-4o, Gemini 2.0, LLaMA 4.0).
                Research paper accepted to IEEE CONECCT 2026.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HuggingFace</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Render</span>
              </div>
              <div className="project-links">
                  <a
                    href="https://github.com/IPD-Hate-Speech-Detection/IPD-Hate-Speech-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://huggingface.co/spaces/dj-dawgs-ipd/IPD-Video-Pipeline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://shorturl.at/7sDSS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Paper
                  </a>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-search"></i>
              </div>
              <h2 className="project-title">MetaSearch</h2>
              <p className="project-description">
                <strong>Search-Augmented LLM for Consensus Resolution</strong>
                <br /> Designed a reasoning-based AI Agent combining
                disagreement detection and fact-grounded synthesis to automate
                meta-review decision-making in peer review. Utilises specialized
                heuristic constraints based on Cognitive Load theory to optimize
                consensus generation.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Agentic AI</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">RAG</span>
              </div>
              <div className="project-links">
                  <a
                    href="https://meta-search-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Tirath5504/IITP_SRDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
              </div>
            </SpotlightCard>



            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-feedback"></i>
              </div>
              <h2 className="project-title">RakshakRita</h2>
              <p className="project-description">
                <strong>QR-led Citizen Feedback System</strong>
                <br /> Civic-tech solution for police departments with
                interactive geo-spatial dashboards, multilingual sentiment
                analysis, and automated report generation. Recognized as a Top
                100 finalist at the Rajasthan Police Hackathon 2024.
              </p>
              <div className="project-tech">
                <span className="tech-tag">BERT</span>
                <span className="tech-tag">NLTK</span>
                <span className="tech-tag">Plotly</span>
                <span className="tech-tag">GeoSpatial</span>
              </div>
              <div className="project-links">
                  <a
                    href="https://rakshakrita0.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Tirath5504/RJPOLICE_HACK_177_DjDawgs_1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </main>
  );
}
