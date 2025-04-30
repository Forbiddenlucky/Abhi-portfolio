import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Cpu, Award, Zap, ChevronRight, Clock } from 'lucide-react';

const Certification = () => {
  const sortedCertifications = [
    {
      title: 'Red Hat Certified Engineer (RHCE)',
      issuer: 'Red Hat',
      year: '2024',
      date: 'February 15, 2024',
      icon: <Terminal className="text-white" size={18} />,
      color: 'bg-red-600',
      description: (
        <span>
          Advanced Linux system administration and automation with Ansible.{' '}
          <a
            href="https://drive.google.com/file/d/1hzBXiZ1oRrtb-Fjp_7XOtsoah-86i8QD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    },
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2024',
      date: 'March 10, 2024',
      icon: <Cpu className="text-white" size={18} />,
      color: 'bg-purple-600',
      description: (
        <span>
          CompTIA+ Security fundamentals covering core security concepts, threats, and best practices.{' '}
          <a
            href="https://drive.google.com/file/d/1z0F8LDEYFxEnvFJ5L0avSdmCeFsYJYRn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    },
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon',
      year: '2023',
      date: 'November 5, 2023',
      icon: <Award className="text-white" size={18} />,
      color: 'bg-amber-500',
      description: (
        <span>
          Designing distributed systems on AWS platform.{' '}
          <a
            href="https://drive.google.com/file/d/1WIFAKofg5mzYfQ6T5LAhIQUx674GvhP8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Linux Foundation',
      year: '2023',
      date: 'September 20, 2023',
      icon: <Award className="text-white" size={18} />,
      color: 'bg-blue-400',
      description: 'Kubernetes cluster management and application deployment.'
    },
    {
      title: 'Cisco Certified Network Professional',
      issuer: 'Cisco',
      year: '2023',
      date: 'August 12, 2023',
      icon: <Award className="text-white" size={18} />,
      color: 'bg-teal-500',
      description: (
        <span>
          Advanced routing and switching implementations.{' '}
          <a
            href="https://drive.google.com/file/d/1ScdXqa7nP-atdqbYLff3DIR9wf5Dne5I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    },
    {
      title: 'Microsoft Certified: Azure Administrator',
      issuer: 'Microsoft',
      year: '2023',
      date: 'July 8, 2023',
      icon: <Award className="text-white" size={18} />,
      color: 'bg-sky-500',
      description: (
        <span>
          Implementing and managing Microsoft Azure solutions.{' '}
          <a
            href="https://drive.google.com/file/d/1WIFAKofg5mzYfQ6T5LAhIQUx674GvhP8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    },
    {
      title: 'Generative AI Specialization',
      issuer: 'Coursera',
      year: '2023',
      date: 'June 1, 2023',
      icon: <Award className="text-white" size={18} />,
      color: 'bg-yellow-500',
      description: 'Introduction to generative AI applications and principles.'
    },
    {
      title: 'ISC2 Certified in Cybersecurity',
      issuer: 'ISC2',
      year: '2023',
      date: 'May 15, 2023',
      icon: <Shield className="text-white" size={18} />,
      color: 'bg-green-500',
      description: (
        <span>
          Cybersecurity fundamentals and best practices certification.{' '}
          <a
            href="https://drive.google.com/file/d/1xUI2zL8UCKSgyT_O-tkdawR9omsCSJSu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Certificate
          </a>
        </span>
      )
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="inline-flex items-center gap-3">
              <Zap className="text-yellow-400" size={26} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Professional Certifications
              </span>
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm">
            Validated expertise across cloud, security, and systems administration
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2"></div>

          <div className="relative flex overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex mx-auto space-x-12 px-6">
              {sortedCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <motion.span
                    className={`text-xs font-medium mb-6 ${
                      activeIndex === index ? 'text-blue-400' : 'text-slate-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.year}
                  </motion.span>

                  <motion.button
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${cert.color} ${
                      activeIndex === index ? 'ring-3 ring-offset-2 ring-blue-400/30 scale-110 shadow-lg' : 'scale-100 hover:scale-105 shadow-md'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cert.icon}
                    {activeIndex === index && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 bg-blue-400 rounded-full p-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </motion.div>
                    )}
                  </motion.button>

                  <motion.span
                    className={`text-[11px] font-medium mt-2 text-center ${
                      activeIndex === index ? 'text-white' : 'text-slate-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.issuer.split(' ')[0]}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mt-6"
        >
          <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700 shadow-lg backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <motion.div
                className={`p-2.5 rounded-md ${sortedCertifications[activeIndex].color} text-white`}
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1.05, 1]
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  repeatDelay: 1
                }}
              >
                {sortedCertifications[activeIndex].icon}
              </motion.div>
              <div>
                <motion.h3
                  className="text-lg font-bold text-white"
                  initial={{ x: -8 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {sortedCertifications[activeIndex].title}
                </motion.h3>
                <motion.p
                  className="text-slate-300 mt-1 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {sortedCertifications[activeIndex].description}
                </motion.p>
                <motion.div
                  className="mt-3 flex items-center gap-2 text-xs text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ChevronRight size={14} />
                  </motion.div>
                  <span>Issued: {sortedCertifications[activeIndex].date}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xs mx-auto mt-8"
        >
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div className="p-2 rounded-md bg-blue-500/10 text-blue-400">
              <Shield size={16} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-blue-400">NEXT:</span>
                <span className="text-sm font-semibold text-white">CISSP</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Clock size={12} className="text-slate-400" />
                <span className="text-xs text-slate-300">Q1 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
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
};

export default Certification;