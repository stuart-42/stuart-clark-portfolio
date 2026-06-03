import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Download, ExternalLink, ChevronDown, FileText, Video, BarChart3, Code2, Award, Menu, X } from 'lucide-react';

const SKILL_ICONS = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  PyTorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  Matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  Streamlit: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
  'Streamlit Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg',
  'AWS ECS Fargate': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  'AWS S3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
};

const HF_SKILLS = new Set(['BERT', 'DistilBERT', 'ModernBERT', 'Transformers', 'HuggingFace', 'Sentence Transformers']);

const HuggingFaceIcon = () => (
  <svg width="13" height="13" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#FFD21E"/>
    <ellipse cx="11.5" cy="15" rx="3" ry="3.5" fill="white"/>
    <ellipse cx="20.5" cy="15" rx="3" ry="3.5" fill="white"/>
    <circle cx="11.5" cy="15.5" r="1.5" fill="#1A1A1A"/>
    <circle cx="20.5" cy="15.5" r="1.5" fill="#1A1A1A"/>
    <path d="M10 22.5C11.5 24 13.5 25 16 25s4.5-1 6-2.5C20.3 23 18.3 23.5 16 23.5S11.7 23 10 22.5z" fill="#1A1A1A"/>
  </svg>
);

const VercelIcon = () => (
  <svg width="11" height="10" viewBox="0 0 76 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
  </svg>
);

const SkillTag = ({ label, colorClass }) => {
  const src = SKILL_ICONS[label];
  const isHF = HF_SKILLS.has(label);
  const isVercel = label === 'Vercel';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${colorClass} rounded-full text-sm`}>
      {isHF && <HuggingFaceIcon />}
      {isVercel && <VercelIcon />}
      {!isHF && !isVercel && src && <img src={src} alt="" width="13" height="13" className="flex-shrink-0" />}
      {label}
    </span>
  );
};

export default function StuartClarkPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'project', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 mt-1">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-lg tracking-tight">Stuart Clark</div>
            <div className="hidden md:flex gap-8 text-sm">
              {['home', 'about', 'project', 'skills', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {section === 'project' ? 'Projects' : section}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-1">
            {['home', 'about', 'project', 'skills', 'experience', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 capitalize text-sm transition-colors border-b border-slate-100 last:border-0 ${
                  activeSection === section ? 'text-blue-600 font-medium' : 'text-slate-600'
                }`}
              >
                {section === 'project' ? 'Projects' : section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center px-6 pt-16" style={{ minHeight: '74vh' }}>
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 flex justify-center md:justify-start animate-[fadeIn_0.5s_ease-out]">
              <img
                src="/headshot.png"
                alt="Stuart Clark"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-blue-600 border-4 border-white shadow-lg items-center justify-center text-white text-3xl md:text-4xl font-bold"
                style={{ display: 'none' }}
              >
                SC
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 animate-[fadeIn_0.6s_ease-out]">
                Open to Opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeIn_0.8s_ease-out] leading-tight">
                ML Engineer for<br />
                <span className="text-blue-600">regulated, high-stakes domains</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl animate-[fadeIn_1s_ease-out] leading-relaxed">
                Production NLP + SHAP explainability + 14 years of compliance fluency. Built for RegTech.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start animate-[fadeIn_1.2s_ease-out]">
                <a
                  href="https://rag-triage.vercel.app/app.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
                <a
                  href="https://drive.google.com/file/d/1KnqiMBgV2T_Ur_c415AcwxtDlS6pHMHw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <FileText size={20} />
                  Read the Dissertation
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex items-center px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I hold an <strong>MSc in Computer Science with AI</strong> from Northumbria University,
                bringing a unique perspective to the field through my extensive background in health and safety consulting.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                After 18 years managing workplace safety across diverse industries, I recognized how AI could 
                transform risk management. This led me to pursue advanced studies in machine learning and natural 
                language processing.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                My dissertation focuses on using <strong>Transformer models and Explainable AI</strong> to predict 
                incident severity from safety reports—combining my domain expertise with technical skills to solve 
                problems I've experienced firsthand.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-lg mb-3 text-blue-600">What I Bring</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Real-world understanding of occupational safety challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Hands-on experience with modern ML/NLP techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Risk assessment and data-driven decision making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Passionate about applying AI for social good</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-2">Currently Seeking</h3>
                <p className="text-slate-700">
                  ML Engineer roles in RegTech, risk-tech, insurtech, or AI governance — remote, UK-based.
                  Domain expertise in regulated, high-stakes environments is my differentiator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="project" className="min-h-screen px-6 py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Applied AI and NLP projects in occupational health and safety
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 space-y-6">
              {/* Dissertation Title */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium mb-3">
                  <Award size={14} />
                  MSc Dissertation
                </div>
                <h3 className="text-2xl font-bold mb-2">Predicting Incident Severity from Safety Reports Using Transformer Models and Explainable AI</h3>
                <p className="text-slate-600">Fine-tuned BERT-family models on 180,000+ OSHA incident records to classify severity, using SHAP to surface model reasoning and enable responsible deployment as a decision-support tool.</p>
              </div>
             
              {/* Key Finding */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold text-lg mb-2 text-blue-900">Key Finding</h3>
                <p className="text-slate-700 leading-relaxed">
                  XAI (SHAP) unlocks AI as a powerful <strong>decision-support tool</strong> for occupational
                  safety — revealing hidden model biases and enabling responsible deployment where standalone
                  classifiers fall short.
                </p>
              </div>

              {/* Technical Overview + Infographic */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-blue-600" />
                    Technical Approach
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Fine-tuned <strong>DistilBERT</strong> and <strong>ModernBERT</strong> transformers on 180,000+ OSHA records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Applied <strong>SHAP</strong> (Explainable AI) for model transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Strategic class weighting to handle data imbalance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Hyperparameter optimization with <strong>Optuna</strong></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Key Insights
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Macro-Avg AUC-ROC: 0.77–0.78 · Log Loss: 1.07</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>None class F1: 0.81 / AUC: 0.88 · Major recall: 0.60 / AUC: 0.80</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Struggled with minor/moderate incident classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Strong performance at safety-critical extremes — models show a precautionary bias, systematically misclassifying toward Major rather than None. SHAP confirmed this is learned from narrative richness: the correct failure mode for triage in regulated environments.</span>
                    </li>
                  </ul>
                </div>
                </div>

                {/* Infographic */}
                <a
                  href="https://drive.google.com/file/d/1kHNKfcP-Y4zqyK3o6VJdwJrRIxR61Wjh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <img
                    src="/infographic.png"
                    alt="Dissertation infographic"
                    className="w-full object-contain object-top h-[531px]"
                  />
                  <div className="p-3 bg-slate-50 text-sm text-center text-slate-600 flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    View full infographic
                  </div>
                </a>
              </div>

              {/* Resources */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-lg mb-4">Project Resources</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href="https://drive.google.com/file/d/1KnqiMBgV2T_Ur_c415AcwxtDlS6pHMHw/view?usp=sharing"
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <FileText size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Dissertation PDF</div>
                      <div className="text-xs text-slate-500">Full paper</div>
                    </div>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1ll8vbcf9DV81KRcw7zyJ377UnJayBpHx/view?usp=sharing"
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <Video size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">NotebookLM Video</div>
                      <div className="text-xs text-slate-500">2-min summary</div>
                    </div>
                  </a>

                  <a
                    href="https://ohs-risk-triage-pkvbxpihl7jbyksr8bqyu9.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors border border-blue-600"
                  >
                    <ExternalLink size={20} className="flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Live Demo</div>
                      <div className="text-xs text-blue-200">Try the prototype</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* RAG Triage API */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 mt-8">
            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium mb-3">
                  <Award size={14} />
                  API Project
                </div>
                <h3 className="text-2xl font-bold mb-2">Care Home Incident Triage API</h3>
                <p className="text-slate-700 leading-relaxed">
                  A health and social care incident classification system combining fine-tuned BERT severity prediction
                  with <strong>Retrieval-Augmented Generation</strong> to map incidents to RIDDOR 2013 regulations and
                  HSG220 mitigation guidance — deployed on AWS ECS Fargate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-blue-600" />
                    Technical Approach
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>FastAPI</strong> backend with Pydantic v2 validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>DistilBERT</strong> classifier across five severity classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>ChromaDB</strong> vector store with RIDDOR, HSG220 and OSHA knowledge bases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>Gemini 2.5 Flash</strong> LLM for regulatory reasoning and causal analysis</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Severity prediction with regulatory RIDDOR mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Causal factor extraction with retrieved mitigation directions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Population-level pattern analysis from OSHA incident data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Deployed on AWS ECS Fargate with Vercel frontend proxy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-lg mb-4">Project Resources</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <a
                    href="https://github.com/stuartclark-ml/rag-triage-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <ExternalLink size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">GitHub Repository</div>
                      <div className="text-xs text-slate-500">View source code</div>
                    </div>
                  </a>

                  <a
                    href="https://rag-triage.vercel.app/app.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors border border-blue-600"
                  >
                    <ExternalLink size={20} className="flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Live Demo</div>
                      <div className="text-xs text-blue-200">Try the app</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OHS Document Parser */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 mt-8">
            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium mb-3">
                  <Award size={14} />
                  Document Intelligence
                </div>
                <h3 className="text-2xl font-bold mb-2">OHS Document Intelligence Pipeline</h3>
                <p className="text-slate-700 leading-relaxed">
                  Automates extraction and structuring of compliance data from occupational health and safety
                  certificates (LOLER, pressure vessels) using <strong>multimodal AI</strong> — replacing
                  error-prone manual auditing with validated, machine-readable JSON output.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-blue-600" />
                    Technical Approach
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>Gemini 2.5 Flash</strong> multimodal reasoning over PDFs and scanned images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>PyMuPDF</strong> with OCR for document processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>Pydantic v2</strong> schema validation for regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span><strong>FastAPI</strong> RESTful API with Streamlit demo interface</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Handles both text-heavy PDFs and scanned image documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Extracts compliance dates, equipment IDs and failure conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Outputs validated JSON ready for risk management system integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Interactive Streamlit interface for stakeholder demonstrations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-lg mb-4">Project Resources</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <a
                    href="https://github.com/stuartclark-ml/ohs-document-parser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <ExternalLink size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">GitHub Repository</div>
                      <div className="text-xs text-slate-500">View source code</div>
                    </div>
                  </a>

                  <a
                    href="https://comfortable-achievement-production.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors border border-blue-600"
                  >
                    <ExternalLink size={20} className="flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Live Demo</div>
                      <div className="text-xs text-blue-200">Try the app</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex items-center px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Machine Learning & AI */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">Machine Learning & AI</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Natural Language Processing</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="BERT" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="DistilBERT" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="ModernBERT" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="Transformers" colorClass="bg-blue-100 text-blue-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">LLMs & Generative AI</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="Gemini 2.5 Flash" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="RAG" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="Prompt Engineering" colorClass="bg-blue-100 text-blue-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Vector Search & Embeddings</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="ChromaDB" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="Sentence Transformers" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="HuggingFace" colorClass="bg-blue-100 text-blue-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">ML Frameworks & Explainability</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="PyTorch" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="Scikit-learn" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="SHAP" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="Optuna" colorClass="bg-blue-100 text-blue-700" />
                    <SkillTag label="TensorFlow" colorClass="bg-blue-100 text-blue-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Programming & Deployment */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">Programming & Deployment</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Languages & Data Science</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="Python" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="SQL" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Java" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Pandas" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="NumPy" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Matplotlib" colorClass="bg-slate-200 text-slate-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">APIs & Backend</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="FastAPI" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Pydantic v2" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Streamlit" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="REST APIs" colorClass="bg-slate-200 text-slate-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Cloud & Deployment</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="AWS ECS Fargate" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="AWS S3" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Vercel" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Railway" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Streamlit Cloud" colorClass="bg-slate-200 text-slate-700" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Document Processing</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag label="PyMuPDF" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="OCR" colorClass="bg-slate-200 text-slate-700" />
                    <SkillTag label="Multimodal AI" colorClass="bg-slate-200 text-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Domain Expertise</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Occupational Safety</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Risk Management</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Safety Auditing</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Regulatory Compliance</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Food Safety</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">MCIEH</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">NEBOSH</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Health & Social Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="px-6 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Professional Journey</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current - MSc Student */}
              <div className="relative md:pl-20 pl-0">
                <div className="absolute left-5 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">MSc Computer Science with AI — First Class</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Oct 2023 – 2026</span>
                  </div>
                  <div className="text-blue-600 font-medium mb-2">Northumbria University (Distance Learning)</div>
                  <p className="text-slate-600">
                    Specializing in Machine Learning and Natural Language Processing. Dissertation focused on 
                    applying Transformer models and Explainable AI to workplace safety incident prediction.
                  </p>
                </div>
              </div>

              {/* Full-time Parent */}
              <div className="relative md:pl-20 pl-0">
                <div className="absolute left-5 top-2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Career Break - Full-time Parenting</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Sep 2022 – Oct 2023</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-2">Remote / UK-based (UTC+5)</div>
                  <p className="text-slate-600">
                    Balancing family responsibilities while pursuing advanced education in AI and computer science.
                  </p>
                </div>
              </div>

              {/* Consultant */}
              <div className="relative md:pl-20 pl-0">
                <div className="absolute left-5 top-2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Health & Safety Consultant</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Mar 2022 - Sep 2022</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-2">Self-employed</div>
                  <p className="text-slate-600">
                    Provided independent consulting on food safety, health and safety, and site inspections.
                  </p>
                </div>
              </div>

              {/* NEBOSH & Career Development */}
              <div className="relative md:pl-20 pl-0">
                <div className="absolute left-5 top-2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">NEBOSH Diploma — Advanced Professional Development</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Mar 2019 - Mar 2022</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-2">Remote / UK-based</div>
                  <p className="text-slate-600">
                    Pursued the NEBOSH Diploma as a deliberate investment in deepening professional expertise —
                    the highest practitioner-level qualification in occupational health and safety, underpinning
                    all subsequent consulting and AI safety work.
                  </p>
                </div>
              </div>

              {/* Senior Consultant - Main Career */}
              <div className="relative md:pl-20 pl-0">
                <div className="absolute left-5 top-2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Senior Health and Safety Consultant</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">May 2011 - Mar 2019</span>
                  </div>
                  <div className="text-amber-600 font-medium mb-2">NAVITAS/Local Government</div>
                  <p className="text-slate-600 mb-3">
                    <strong>18 years</strong> of comprehensive experience in occupational health and safety Food Safety consulting, 
                    risk management, and compliance auditing across diverse industries. Including local government public health enforcement.
                  </p>
                  <div className="text-sm text-slate-600">
                    Key responsibilities included site inspections, risk assessments, safety audits, policy development, enforcement action, grant administration,
                    and training delivery. 
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award size={20} className="text-blue-600" />
                Education
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>MSc Computer Science with AI — First Class</strong> - Northumbria University (2023–2026)</li>
                <li><strong>NEBOSH Diploma</strong> - DipNEBOSH</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Award size={20} className="text-amber-600" />
                Professional Certifications
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>MCIEH</strong> - Member Chartered Institute of Environmental Health</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex items-center px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-600">
              Interested in collaboration, internship opportunities, or just want to chat about AI in safety tech?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-xl mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/stuart-clark-161340164"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-slate-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-slate-500">Professional profile</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-slate-500">stuartclarkfc@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="text-sm text-slate-600">
                    <strong>Location:</strong> Remote / UK-based (UTC+5)<br />
                    <strong>Availability:</strong> Open to remote opportunities in the UK and internationally
                  </div>
                </div>
              </div>

              <a
                href="/Stuart_Clark_CV_v1.pdf"
                download="Stuart_Clark_CV_v1.pdf"
                className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                Download CV/Resume
              </a>
            </div>

            {/* What I'm Looking For */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="font-semibold text-xl mb-4 text-blue-900">Open to Opportunities</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>ML Engineer</strong> - RegTech, risk-tech, insurtech, or AI governance — remote, UK-based</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Software Engineer (Python/ML)</strong> - Building intelligent systems and data pipelines</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-lg mb-3">Ideal Projects</h3>
                <p className="text-slate-700 mb-3">
                  I'm particularly interested in roles where I can apply ML/NLP to:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>Safety and risk management applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>Healthcare or social impact domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>Document analysis and text classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>Explainable AI and responsible ML systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-white font-semibold text-lg mb-2">Stuart Clark</div>
              <div className="text-sm">ML Engineer | Explainable AI | Risk & Compliance</div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/stuart-clark-161340164"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>© 2026 Stuart Clark. Built with care to showcase the intersection of safety expertise and AI innovation.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}