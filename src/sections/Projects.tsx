import { motion } from "framer-motion";
import { FaShieldAlt, FaTerminal, FaImages, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Firewall Automation",
    date: "2023",
    description: "Automated firewall rules using Bash scripts",
    technologies: ["Bash", "iptables", "firewalld"],
    icon: <FaShieldAlt className="text-blue-400" />,
    accent: "bg-blue-500",
    github: "https://github.com/Forbiddenlucky/Firewall-Automation", // GitHub link for Firewall Automation
    live: "#" // You can add Netlify link here later
  },
  {
    title: "Network Config",
    date: "2024",
    description: "Automated network setup for lab environments",
    technologies: ["Bash", "netplan", "systemd"],
    icon: <FaTerminal className="text-purple-400" />,
    accent: "bg-purple-500",
    github: "https://github.com/Forbiddenlucky/-Network-Configuration", // GitHub link for Network Config
    live: "#" // You can add Netlify link here later
  },
  {
    title: "Photo Gallery",
    date: "2024",
    description: "Responsive gallery with filtering",
    technologies: ["React", "Node.js", "CSS"],
    icon: <FaImages className="text-indigo-400" />,
    accent: "bg-indigo-500",
    github: "#",
    live: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Timeline
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 -translate-y-1/2"></div>
          
          <div className="relative flex overflow-x-auto pb-16 hide-scrollbar">
            <div className="flex mx-auto space-x-16 px-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.span 
                    className="text-sm font-medium mb-8 text-slate-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.date}
                  </motion.span>
                  
                  <motion.div
                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center ${project.accent} shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="mt-6 p-5 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 w-64"
                  >
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-300 mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          <FaGithub size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
