import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Code2, Layers, Database, Terminal, Coffee, FileCode, Zap, Box, Target, Leaf, Moon, Bird, Atom, HardDrive, Flame, GitBranch, Monitor, Send, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getSkillIcon = (name) => {
    const iconMap = {
      'Java': Coffee,
      'Python': FileCode,
      'JavaScript': Zap,
      'PHP': Box,
      'Dart': Target,
      'Spring Boot': Leaf,
      'Hibernate': Moon,
      'Flutter': Bird,
      'React': Atom,
      'MySQL': HardDrive,
      'Firebase': Flame,
      'Git': GitBranch,
      'VS Code': Monitor,
      'Postman': Send
    };
    const Icon = iconMap[name] || Box;
    return <Icon className="w-5 h-5 text-primary-600" />;
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
      description: 'A digital platform showcasing the cultural heritage and tourist attractions of Amritsar.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: 'https://github.com/RezenBoy/Amritsar-tourism'
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming application with modern UI/UX and responsive design.',
      tech: ['JavaScript', 'CSS', 'HTML'],
      github: 'https://github.com/RezenBoy/spotify_clone'
    },
    {
      title: 'Pet Shop',
      description: 'An e-commerce platform for pet products with complete backend integration.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      github: 'https://github.com/RezenBoy/pet_shop'
    },
    {
      title: 'College Project',
      description: 'A full-stack Java project demonstrating layered architecture and CRUD operations.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/RezenBoy/College_Project'
    }
  ];

  const experience = [
    {
      role: 'Coding Tutor',
      company: 'Creed Infotech Pvt. Ltd.',
      period: 'June 2025 - Present',
      description: 'Teaching Java, Python, HTML, CSS, JavaScript, IT, and AI to U.S.-based students from school to college level.'
    },
    {
      role: 'Flutter Developer Intern',
      company: 'Boffin Coders Pvt. Ltd.',
      period: 'June 2023 - Sept 2023',
      description: 'Developed Flutter apps using Firebase and implemented modern UI patterns in real-world projects.'
    },
    {
      role: 'Java Full Stack Trainee',
      company: 'Pisoft Informatics Pvt. Ltd.',
      period: 'Jan 2025 - July 2025',
      description: 'Built CRUD-based enterprise systems using Spring Boot and MySQL under structured training.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Punjabi University',
      year: '2025 (Pursuing)',
      description: 'Focused on full-stack development, software architecture, and scalable web systems.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Punjabi University',
      year: '2023',
      description: 'Developed a strong foundation in programming, database management, and web technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-violet-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simranjeet Singh</h1>
          <div className="hidden md:flex space-x-8 text-sm">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-600 transition-colors font-medium">{item}</a>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 hover:bg-purple-50 hover:text-purple-600 font-medium">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">Full Stack Developer</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
          Passionate about crafting secure, scalable software systems and mentoring students to master modern technologies.
        </p>
        <div className="flex justify-center gap-5">
          <a href="https://github.com/RezenBoy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition">
            <Github /> GitHub
          </a>
          <a href="mailto:smrnjtsngh82@gmail.com" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition">
            <Mail /> Email
          </a>
          <a href="https://linkedin.com/in/simranjeet-singh-309595250/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">About Me</h3>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
          I'm a full-stack developer and educator from India passionate about crafting secure, scalable systems and mentoring students worldwide. My focus lies in writing clean, efficient code and following modern software architecture principles.
        </p>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">Technical Expertise</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border-t-4 border-gradient-to-r from-blue-500 to-purple-600">
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {list.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm font-medium">{getSkillIcon(item)} {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-6 border border-gray-100">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200 rounded-full text-gray-700">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium">
                View Project <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">Experience</h3>
        <div className="max-w-5xl mx-auto space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
              <div className="text-gray-700 text-sm mb-1 font-medium">{exp.company}</div>
              <div className="text-gray-500 text-xs mb-3">{exp.period}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">Education</h3>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
              </div>
              <div className="text-gray-700 text-sm font-medium">{edu.institution}</div>
              <div className="text-gray-500 text-xs mb-2">{edu.year}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center bg-gradient-to-r from-purple-50 to-blue-50">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
          Interested in collaborating or discussing new opportunities? Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-800">
          <a href="mailto:smrnjtsngh82@gmail.com" className="hover:text-purple-600 transition font-medium">smrnjtsngh82@gmail.com</a>
          <a href="https://github.com/RezenBoy" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition font-medium">GitHub</a>
          <a href="https://linkedin.com/in/simranjeet-singh-309595250/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition font-medium">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 text-center text-sm text-gray-500 bg-white/80">
        © 2025 Simranjeet Singh — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Building with Purpose 🚀</span>
      </footer>
    </div>
  );
}