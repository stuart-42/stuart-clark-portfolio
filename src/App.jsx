import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Download, ExternalLink, ChevronDown, FileText, Video, BarChart3, Code2, Award } from 'lucide-react';

export default function StuartClarkPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

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
        <div className="max-w-6xl mx-auto px-6 py-4">
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
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 animate-[fadeIn_0.6s_ease-out]">
            Open to Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeIn_0.8s_ease-out] leading-tight">
            From Safety Expert<br />
            <span className="text-blue-600">to AI Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out] leading-relaxed">
            Bridging 8+ years of occupational safety consulting with cutting-edge machine learning to solve real-world problems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1.2s_ease-out]">
            <a 
              href="https://linkedin.com/in/stuart-clark-161340164" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
            <button 
              onClick={() => scrollToSection('project')}
              className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View Featured Work
              <ExternalLink size={20} />
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm finalizing my <strong>MSc in Computer Science with AI</strong> at Northumbria University, 
                bringing a unique perspective to the field through my extensive background in health and safety consulting.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                After 8+ years managing workplace safety across diverse industries, I recognized how AI could 
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
                  Machine Learning Engineer, AI Intern, or Software Engineer roles where I can continue 
                  learning while contributing domain expertise in safety tech, NLP, or risk analysis
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
              <Award size={16} />
              MSc Dissertation Project
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Auditing "Black Box" AI for<br />Occupational Safety
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Using NLP and Explainable AI to predict incident severity and uncover hidden biases in workplace safety models
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-8 space-y-8">
              {/* Key Finding */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold text-lg mb-2 text-blue-900">Key Finding</h3>
                <p className="text-slate-700 leading-relaxed">
                  While AI modeling proved unreliable as a standalone classifier, it becomes a powerful 
                  <strong> decision-support tool</strong> when combined with Explainable AI (SHAP) to audit 
                  dangerous hidden biases in workplace safety predictions.
                </p>
              </div>

              {/* Technical Overview */}
              <div className="grid md:grid-cols-2 gap-6">
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
                      <span>Models excelled at extremes (High Severity / No Harm)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Struggled with minor/moderate incident classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>Revealed textual distinctiveness is as critical as model complexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 text-xs">▸</span>
                      <span>XAI showed models err on side of caution (predict Major over Minor)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resources */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-lg mb-4">Project Resources</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <FileText size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Dissertation PDF</div>
                      <div className="text-xs text-slate-500">Full paper</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <Code2 size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Google Colab</div>
                      <div className="text-xs text-slate-500">Interactive code</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <Video size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">NotebookLM Video</div>
                      <div className="text-xs text-slate-500">2-min summary</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    <BarChart3 size={20} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">Infographic</div>
                      <div className="text-xs text-slate-500">Visual summary</div>
                    </div>
                  </a>
                </div>
                <p className="text-sm text-slate-500 mt-4 italic">
                  Note: Project materials will be made available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-white">
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">BERT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">DistilBERT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ModernBERT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Transformers</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">ML Frameworks & Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">PyTorch</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Scikit-learn</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">HuggingFace</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Explainable AI & Optimization</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SHAP</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Optuna</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Model Fine-tuning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming & Data Science */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">Programming & Data Science</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">Java</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Data Science Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">Pandas</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">NumPy</span>
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">Matplotlib</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Domain Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Occupational Safety</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Risk Management</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Safety Auditing</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">NEBOSH</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">RIDDOR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-slate-700 text-center">
              <strong>Note:</strong> Technical ML/AI skills developed through intensive MSc dissertation work. 
              Combined with 8+ years of professional safety consulting experience.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="min-h-screen px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Professional Journey</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current - MSc Student */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">MSc Computer Science with AI</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Oct 2023 - Present</span>
                  </div>
                  <div className="text-blue-600 font-medium mb-2">Northumbria University (Distance Learning)</div>
                  <p className="text-slate-600">
                    Specializing in Machine Learning and Natural Language Processing. Dissertation focused on 
                    applying Transformer models and Explainable AI to workplace safety incident prediction.
                  </p>
                </div>
              </div>

              {/* Full-time Parent */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Career Break - Full-time Parenting</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Sep 2022 - Present</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-2">Kathmandu, Nepal</div>
                  <p className="text-slate-600">
                    Balancing family responsibilities while pursuing advanced education in AI and computer science.
                  </p>
                </div>
              </div>

              {/* Consultant */}
              <div className="relative pl-20">
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
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Professional Development</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">Mar 2019 - Mar 2022</span>
                  </div>
                  <div className="text-slate-600 font-medium mb-2">Bangladesh</div>
                  <p className="text-slate-600">
                    Completed NEBOSH Diploma. Also trained as a Certified Personal Trainer while exploring 
                    career transition opportunities.
                  </p>
                </div>
              </div>

              {/* Senior Consultant - Main Career */}
              <div className="relative pl-20">
                <div className="absolute left-5 top-2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white hidden md:block" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold">Senior Health and Safety Consultant</h3>
                    <span className="text-sm text-slate-500 mt-1 sm:mt-0">May 2011 - Mar 2019</span>
                  </div>
                  <div className="text-amber-600 font-medium mb-2">NAVITAS/ESB</div>
                  <p className="text-slate-600 mb-3">
                    <strong>8 years</strong> of comprehensive experience in occupational health and safety consulting, 
                    risk management, and compliance auditing across diverse industries.
                  </p>
                  <div className="text-sm text-slate-600">
                    Key responsibilities included site inspections, risk assessments, safety audits, policy development, 
                    and training delivery. This experience forms the foundation for my current AI/ML work in safety tech.
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
                <li><strong>MSc Computer Science with AI</strong> - Northumbria University (2023-2025)</li>
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
                <li><strong>Certified Personal Trainer</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-white">
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
                      <div className="text-sm text-slate-500">Available via LinkedIn</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="text-sm text-slate-600">
                    <strong>Location:</strong> Currently based in Kathmandu, Nepal<br />
                    <strong>Availability:</strong> Open to remote opportunities in the UK and internationally
                  </div>
                </div>
              </div>

              <a 
                href="#"
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
                    <span><strong>Machine Learning Engineer</strong> - Entry level or junior positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>AI Internships</strong> - Eager to learn from experienced teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Software Engineer</strong> - Python/ML focused roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1 font-bold">•</span>
                    <span><strong>Volunteer Projects</strong> - Contributing to meaningful AI initiatives</span>
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
              <div className="text-sm">Aspiring AI Engineer | Machine Learning | Health & Safety Expert</div>
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
            <p>© 2025 Stuart Clark. Built with care to showcase the intersection of safety expertise and AI innovation.</p>
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