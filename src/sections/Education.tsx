import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to the most recent education
  
  const educationData = [
    {
      degree: '10th Standard',
      institution: 'PD Academy',
      year: '2017',
      percentage: '79.9%',
      location: 'Salempur, UP',
      description: 'Completed my 10th standard education with a focus on core subjects.',
    },
    {
      degree: '12th Standard',
      institution: "St. Xavier's School",
      year: '2019',
      percentage: '66%',
      location: 'Salempur, UP',
      description: 'Finished higher secondary education with a science specialization.',
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      year: '2022-Present',
      percentage: 'CGPA: 6.18',
      location: 'Punjab',
      description: 'Currently pursuing a Bachelor of Technology degree in Computer Science, focusing on cybersecurity and system administration.',
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Timeline */}
            <div className="w-full md:w-1/3">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="mb-8 relative cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div 
                      className={`absolute left-0 w-6 h-6 rounded-full -translate-x-3 
                      transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-110 shadow-md shadow-blue-500/20' 
                          : 'bg-slate-700 border border-slate-600'
                      }`}
                    ></div>
                    <div 
                      className={`pl-6 transition-all duration-300 ${
                        activeIndex === index 
                          ? 'text-white' 
                          : 'text-slate-400'
                      }`}
                    >
                      <p className="font-medium">{item.institution}</p>
                      <p className="text-sm opacity-75">{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <motion.div 
              className="w-full md:w-2/3 card-3d"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={activeIndex}
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={24} className="text-blue-400" />
                <h3 className="text-xl font-semibold">{educationData[activeIndex].degree}</h3>
              </div>
              
              <h4 className="text-lg text-slate-300 mb-4">{educationData[activeIndex].institution}</h4>
              
              <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  <span>{educationData[activeIndex].year}</span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={16} />
                  <span>{educationData[activeIndex].location}</span>
                </div>
                
                <div className="text-slate-400">
                  <span className="font-medium text-blue-400">{educationData[activeIndex].percentage}</span>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                {educationData[activeIndex].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;