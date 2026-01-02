import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Cpu, Terminal, ChevronDown, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Survey Management System with Machine Learning",
      description: "Advanced survey platform with intelligent clustering algorithms (K-Means, K-Means++, K-Medoids) for response analysis. Features KNN imputation, silhouette scoring, and comprehensive data visualization. Achieved perfect 10/10 grade.",
      tech: ["Java", "JavaFX", "Machine Learning", "K-Means", "Maven", "JUnit"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "https://github.com/AmaraX7/Survey-Management-System",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "EDA AI Tournament – Harry Potter Edition",
      description: "Intelligent agents inspired by Harry Potter competing to capture strategic points while avoiding enemy spells. Ranked Top 20 out of 350 participants.",
      tech: ["C++", "Game AI", "BFS", "DFS", "Backtracking"],
      image: "https://media.istockphoto.com/id/1997973808/es/foto/el-hist%C3%B3rico-palace-theatre-con-un-cartel-que-anuncia-la-obra-harry-potter-and-the-cursed.jpg?s=612x612&w=0&k=20&c=tF8sDiU2hYFxWs0Y2uY3I_BZBS-QT5e8I6h0uMzpcHs=",
      github: "https://github.com/AmaraX7/JOC-EDA-FIB-24-25",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "EDA – Data Structures and Algorithms",
      description: "Comprehensive repository of solved problems from jutge.org. Implementations using trees, stacks, queues, graphs, and maps with detailed study notes.",
      tech: ["C++", "Algorithms", "Data Structures"],
      image: "https://jutge.org/ico/welcome/jutge.png",
      github: "https://github.com/AmaraX7/EDA-FIB",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Fluvial Trade Simulation",
      description: "Trading system simulation between cities connected by a river network. Achieved 10/10 grade in Programming 2 course at UPC.",
      tech: ["C++", "OOP"],
      image: "https://media.istockphoto.com/id/1173116341/es/foto/vista-de-%C3%A1ngulo-alto-en-la-terminal-de-contenedores-de-gr%C3%BAa-de-carga.jpg?s=612x612&w=0&k=20&c=CgLvs5ve4rcgXdogi_kRG7m0leQVWYCUsC9tTkGeOp8=",
      github: "https://github.com/AmaraX7/PRACTICA-PRO2-23-24",
      gradient: "from-cyan-600 to-teal-600"
    }
  ];

  const skills = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "C++",
      items: [
        "Advanced data structures: trees, stacks, maps",
        "Backtracking, BFS, DFS, Dijkstra algorithms",
        "Qt framework for GUI development",
        "3D rendering with vertex and color shaders"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Java",
      items: [
        "JavaFX for desktop application development",
        "Machine Learning algorithm implementation",
        "Maven project management and testing with JUnit",
        "MVC architecture and layered design patterns"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Terminal className="w-12 h-12" />,
      title: "C",
      items: [
        "OS: Process management, memory handling, IPC",
        "PIC18 firmware development with peripherals",
        "OpenMP parallel computing optimization",
        "Cache analysis and low-level optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); }
        }
        .animate-gradient { animation: gradient 8s ease infinite; background-size: 200% 200%; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .skill-card:hover {
          transform: translateY(-10px) rotateY(5deg);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">
            Mohamed Amara
          </h1>
          <div className="flex gap-8">
            {['Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQFZQobQ-6jhTw/profile-displayphoto-scale_400_400/B4DZshiE4LGwAg-/0/1765794140751?e=1769040000&v=beta&t=QAj0RDuEf4lcXNp8_mztlavSyJ_da_K51swU21VoZ2I"
                alt="Mohamed Amara"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl"
              />
            </div>
          </div>
          <div className="inline-block px-6 py-2 glass rounded-full text-sm font-medium text-cyan-400 mb-8">
            Computer Engineering Student
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Building <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">efficient software</span> and <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">secure systems</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            Specializing in software development, cybersecurity, and cloud infrastructure.
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Third-year · Facultat d'Informàtica de Barcelona (UPC)
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/30">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 glass rounded-lg font-semibold hover:scale-105 transition-all border border-cyan-500/30 hover:border-cyan-500/50">
              Contact Me
            </a>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto mt-16 animate-bounce" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-block px-4 py-1 glass rounded-full text-sm font-medium text-cyan-400 mb-4">
              Portfolio
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Selection of academic and personal projects showcasing problem-solving and technical skills
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card hover-lift glass rounded-2xl overflow-hidden group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-bold"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Project</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 glass rounded-md text-xs font-medium text-gray-300 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-block px-4 py-1 glass rounded-full text-sm font-medium text-cyan-400 mb-4">
              Technical Expertise
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Comprehensive foundation in systems programming, algorithms, and software architecture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-card glass rounded-xl p-8 hover-lift transition-all duration-300 border border-white/5"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-cyan-400 mt-1 text-xs">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full" />
          
          <p className="text-xl text-gray-300 mb-12">
            Open to internships and opportunities to grow as a developer and engineer
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:mohamedamara212@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-110 transition-transform shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/AmaraX7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass rounded-full font-bold hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-amara-el-houiti-09133b345/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass rounded-full font-bold hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/5">
        <p className="text-sm">© 2025 Mohamed Amara · Computer Engineering Student</p>
      </footer>
    </div>
  );
};

export default Portfolio;