import { motion } from 'framer-motion';
import { FaTrophy, FaFlagCheckered } from 'react-icons/fa';

const achievements = [
  {
    title: 'Cleared 30+ challenges on OverTheWire: Bandit',
    icon: <FaTrophy className="text-yellow-500" />,
    description: 'Demonstrated persistence and Linux command-line mastery by completing 30+ hands-on CTF-style challenges on OverTheWire: Bandit, a renowned wargame for cybersecurity enthusiasts.',
  },
  {
    title: 'Solved CTF on Hack The Box',
    icon: <FaFlagCheckered className="text-green-400" />,
    description: 'Successfully captured flags on Hack The Box, applying ethical hacking and real-world penetration testing skills in a competitive, global environment.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/5 border border-slate-700 rounded-xl px-5 py-4 shadow-sm"
              >
                <span className="p-2 bg-slate-800 rounded-full">
                  {achievement.icon}
                </span>
                <span className="text-base md:text-lg text-slate-200 font-medium">
                  {achievement.title}
                  {achievement.description && (
                    <span className="block text-slate-400 text-sm mt-1">
                      {achievement.description}
                    </span>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
