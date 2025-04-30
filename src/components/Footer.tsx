import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github size={16} />, 
      href: 'https://github.com/Forbiddenlucky',
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={16} />, 
      href: 'https://www.linkedin.com/in/abhisheklpu/',
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={16} />, 
      href: 'mailto:kushwahaabhishek7756@gmail.com',
      label: 'Email'
    },
    { 
      icon: <Phone size={16} />, 
      href: 'tel:+916387050043',
      label: 'Phone'
    },
  ];

  // Subtle connection lines animation
  const ConnectionAnimation = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
          style={{
            width: `${Math.random() * 100 + 50}%`,
            left: `${Math.random() * 20}%`,
            top: `${20 + (i * 15)}%`,
            rotate: `${Math.random() * 6 - 3}deg`
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <footer className="relative bg-slate-900/95 py-8 border-t border-slate-800 overflow-hidden">
      <ConnectionAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.6 }
          }}
        >
          {/* Animated social links */}
          <div className="flex space-x-5">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ 
                  y: -3,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ 
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.4
                  }
                }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright with subtle animation */}
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: { delay: 0.4 }
            }}
          >
            <p className="text-slate-400 text-sm">
              © {currentYear} Abhishek Kushwaha
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated bottom border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ 
          scaleX: 1,
          transition: { duration: 0.8, delay: 0.2 }
        }}
      />
    </footer>
  );
};

export default Footer;