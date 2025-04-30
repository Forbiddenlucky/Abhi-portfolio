import { motion } from 'framer-motion';
import { Shield, Terminal, Database, Server } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Shield size={32} className="text-blue-400" />,
      title: 'Cybersecurity',
      description: 'Passionate about creating secure systems and identifying vulnerabilities.',
    },
    {
      icon: <Terminal size={32} className="text-purple-400" />,
      title: 'Linux Enthusiast',
      description: 'Experienced in system administration and shell scripting.',
    },
    {
      icon: <Database size={32} className="text-indigo-400" />,
      title: 'Automation',
      description: 'Building efficient tools to automate repetitive system tasks.',
    },
    {
      icon: <Server size={32} className="text-teal-400" />,
      title: 'System Management',
      description: 'Configuring and optimizing networks and server environments.',
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto mb-16 px-4"> {/* Reduced max-width and added horizontal padding */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 leading-relaxed text-center"
          >
            I'm a tech enthusiast diving deep into cybersecurity, Linux, and system automation. From scripting secure firewall rules to experimenting on TryHackMe, I'm all about building efficient and safe systems. I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"> {/* Added horizontal padding */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className="card-3d flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-400 px-2">{card.description}</p> {/* Added horizontal padding */}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradient-shift 3s ease-in-out infinite;
        }
        .card-3d {
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: translateY(-10px) translateZ(10px);
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;