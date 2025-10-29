import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Code2, Briefcase, GraduationCap, ArrowUpRight, Terminal, Sparkles, Coffee, FileCode, Zap, Box, Target, Leaf, Moon, Bird, Atom, HardDrive, Flame, GitBranch, Monitor, Send } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
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

  const getSkillIcon = (name) => {
    const iconMap = {
      'Java': Coffee, 'Python': FileCode, 'JavaScript': Zap, 'PHP': Box,
      'Dart': Target, 'Spring Boot': Leaf, 'Hibernate': Moon, 'Flutter': Bird,
      'React': Atom, 'MySQL': HardDrive, 'Firebase': Flame, 'Git': GitBranch,
      'VS Code': Monitor, 'Postman': Send
    };
    const Icon = iconMap[name] || Box;
    return <Icon className="w-4 h-4" />;
  };

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'PHP', 'Dart'],
    frameworks: ['Spring Boot', 'Hibernate', 'Flutter', 'React'],
    databases: ['MySQL', 'Firebase'],
    tools: ['Git', 'VS Code', 'Postman']
  };

  const projects = [
    {
      title: 'Amritsar Tourism',
      description: 'Digital platform showcasing cultural heritage and tourist attractions with interactive maps and multimedia content.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/RezenBoy/Amritsar-tourism',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Spotify Clone',
      description: 'Feature-rich music streaming application with responsive design, playlist management, and modern UI patterns.',
      tech: ['JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/RezenBoy/spotify_clone',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Pet Shop',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and secure payment integration.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      github: 'https://github.com/RezenBoy/pet_shop',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'College Project',
      description: 'Enterprise-grade application demonstrating MVC architecture, RESTful APIs, and advanced CRUD operations.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/RezenBoy/College_Project',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const experience = [
    {
      role: 'Coding Tutor',
      company: 'Creed Infotech Pvt. Ltd.',
      period: 'June 2025 - Present',
      description: 'Mentoring U.S.-based students in programming fundamentals and advanced concepts across Java, Python, JavaScript, and emerging technologies like AI.',
      icon: Terminal,
      color: 'bg-purple-500'
    },
    {
      role: 'Java Full Stack Trainee',
      company: 'Pisoft Informatics Pvt. Ltd.',
      period: 'Jan 2025 - July 2025',
      description: 'Architected and deployed enterprise-level CRUD systems using Spring Boot, implementing security best practices and scalable database designs.',
      icon: Code2,
      color: 'bg-blue-500'
    },
    {
      role: 'Flutter Developer Intern',
      company: 'Boffin Coders Pvt. Ltd.',
      period: 'June 2023 - Sept 2023',
      description: 'Developed cross-platform mobile applications with Firebase integration, implementing real-time features and modern UI/UX patterns.',
      icon: Sparkles,
      color: 'bg-cyan-500'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      short: 'MCA',
      institution: 'Punjabi University',
      year: '2025',
      status: 'Completed',
      description: 'Advanced studies in software engineering, system design, and full-stack development with focus on scalable architectures.'
    },
    {
      degree: 'Bachelor of Computer Applications',
      short: 'BCA',
      institution: 'Punjabi University',
      year: '2023',
      status: 'Completed',
      description: 'Comprehensive foundation in programming, database systems, web technologies, and software development methodologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Simranjeet Singh</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-slate-400'}`}
              >
                {item}
              </a>
            ))}
            <a href="mailto:smrnjtsngh82@gmail.com" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Hire Me
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors border-b border-slate-800"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-400">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <br />
            <span className="text-slate-300 text-3xl md:text-5xl">& Code Educator</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting secure, scalable software systems while empowering the next generation of developers through mentorship and education.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              Let's Connect
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#projects" className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-medium hover:border-purple-500 transition-colors">
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/RezenBoy', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/simranjeet-singh-309595250/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:smrnjtsngh82@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href} 
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer and educator based in India, dedicated to building robust, scalable systems and mentoring aspiring developers worldwide.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans across modern web and mobile technologies, with a strong focus on clean architecture, security best practices, and user-centric design. I believe in writing code that's not just functional, but maintainable and elegant.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400 text-lg">Technologies I work with daily</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <h3 className="text-lg font-semibold mb-4 capitalize text-purple-400">
                  {category}
                </h3>
                <div className="space-y-3">
                  {list.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-300 group-hover:translate-x-1 transition-transform">
                      {getSkillIcon(item)}
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div 
                key={p.title} 
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{p.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium group/link"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div key={i} className="relative pl-8 border-l-2 border-slate-800 hover:border-purple-500/50 transition-colors">
                  <div className={`absolute -left-3 top-0 w-6 h-6 ${exp.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-purple-400">{exp.role}</h3>
                        <p className="text-slate-300 font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
                    {edu.short}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'Pursuing' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                    {edu.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-slate-500 text-sm mb-4">{edu.year}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="mailto:smrnjtsngh82@gmail.com" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send an Email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <a href="https://github.com/RezenBoy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/simranjeet-singh-309595250/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 Simranjeet Singh • Built with passion and <span className="text-purple-400">React</span>
        </p>
      </footer>
    </div>
  );
}