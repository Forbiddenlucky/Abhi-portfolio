import { motion } from 'framer-motion';
import { Download, Mouse } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-content"
          >
            <motion.h1
              className="hero-title gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Greetings, I’m Abhishek Kushwaha
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <strong>Code hard, secure harder — that's how we build the future.</strong>
            </motion.p>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1eQaIiZHDY2MMVaqoTjXOMwofwHZXkcMs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={16} />
                Download Resume
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="scroll-indicator"
          >
            <p>Scroll Down</p>
            <motion.div
              className="mouse-icon"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Mouse size={24} />
              <motion.div
                className="mouse-wheel"
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem; /* Increased from 4rem to 8rem */
          position: relative;
        }
        .container {
          width: 100%;
          max-width: 1200px;
          padding: 0 1rem;
          margin: 0 auto;
        }
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .text-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        @media (min-width: 640px) {
          .hero-title {
            font-size: 4rem;
          }
        }
        .subtitle {
          font-size: 1.25rem;
          color: #7dd3fc;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
          justify-content: center;
        }
        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 1rem;
        }
        .btn-primary {
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          color: #082f49;
          box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: transparent;
          color: #7dd3fc;
          border: 1px solid #38bdf8;
        }
        .btn-secondary:hover {
          background: rgba(56, 189, 248, 0.1);
          color: #bae6fd;
          border-color: #7dd3fc;
        }
        .scroll-indicator {
          margin-top: 4rem;
          text-align: center;
          color: #7dd3fc;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .mouse-icon {
          position: relative;
          width: 24px;
          height: 40px;
          display: flex;
          justify-content: center;
          color: #7dd3fc;
        }
        .mouse-wheel {
          position: absolute;
          width: 4px;
          height: 8px;
          background: #7dd3fc;
          border-radius: 2px;
          top: 6px;
        }
        .gradient-text {
          background: linear-gradient(90deg, #7dd3fc, #bae6fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
            text-shadow: 0 0 10px rgba(125, 211, 252, 0.5);
          }
          50% {
            background-position: 100% center;
            text-shadow: 0 0 20px rgba(186, 230, 253, 0.7);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;