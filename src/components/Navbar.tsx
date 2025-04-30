import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center">
              <span className="text-xl font-semibold gradient-text">Abhishek Kushwaha</span>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 rounded-md transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;