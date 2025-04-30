import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Code, Server, Shield, MessageSquare } from 'lucide-react';

const AnimatedCounter = ({ value }) => {
  const ref = useRef();
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1 });
    return controls.stop;
  }, [value, count]);

  useEffect(() => {
    return rounded.on('change', v => {
      if (ref.current) ref.current.textContent = `${v}%`;
    });
  }, [rounded]);

  return <span ref={ref}>{Math.round(value)}%</span>;
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} className="text-blue-300" />,
      skills: [
        { name: 'C++', level: 65 },
        { name: 'Java', level: 70 },
        { name: 'Python', level: 60 },
        { name: 'Bash', level: 55 },
      ],
      barGradient: 'bg-gradient-to-r from-blue-100/80 via-blue-200/80 to-blue-300/80'
    },
    {
      title: 'Platforms',
      icon: <Server size={24} className="text-purple-300" />,
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'TryHackMe', level: 55 },
        { name: 'HackTheBox', level: 60 },
        { name: 'OverTheWire', level: 50 },
      ],
      barGradient: 'bg-gradient-to-r from-purple-100/80 via-purple-200/80 to-purple-300/80'
    },
    {
      title: 'Tools',
      icon: <Shield size={24} className="text-indigo-300" />,
      skills: [
        { name: 'Git', level: 75 },
        { name: 'Wireshark', level: 60 },
        { name: 'Nmap', level: 70 },
        { name: 'Zenmap', level: 55 },
      ],
      barGradient: 'bg-gradient-to-r from-indigo-100/80 via-indigo-200/80 to-indigo-300/80'
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare size={24} className="text-teal-300" />,
      skills: [
        { name: 'Communication', level: 60 },
        { name: 'Time Management', level: 55 },
        { name: 'Problem Solving', level: 50 },
        { name: 'Teamwork', level: 58 },
      ],
      barGradient: 'bg-gradient-to-r from-indigo-100/80 via-indigo-200/80 to-indigo-300/80'
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-100 mb-12 text-center"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-3xl p-7 border border-slate-700 shadow-lg flex flex-col gap-5 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block"
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between mb-1 items-center">
                      <span className="text-slate-200 text-sm">{skill.name}</span>
                      <span className="text-slate-400 text-sm">
                        <AnimatedCounter value={skill.level} />
                      </span>
                    </div>
                    <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full rounded-full transition-all duration-700 ${category.barGradient}`}
                        style={{ minWidth: 8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;