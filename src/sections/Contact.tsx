import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

// Contact Info Data
const contactInfo = [
  {
    icon: <FaEnvelope size={18} className="text-blue-400" />,
    label: 'Email',
    value: 'kushwahaabhishek7756@gmail.com',
    link: 'mailto:kushwahaabhishek7756@gmail.com',
  },
  {
    icon: <FaPhoneAlt size={18} className="text-purple-400" />,
    label: 'Phone',
    value: '+91 6387050043',
    link: 'tel:+916387050043',
  },
  {
    icon: <FaLinkedin size={18} className="text-indigo-400" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhisheklpu',
    link: 'https://www.linkedin.com/in/abhisheklpu/',
  },
  {
    icon: <FaGithub size={18} className="text-teal-400" />,
    label: 'GitHub',
    value: 'github.com/Forbiddenlucky',
    link: 'https://github.com/Forbiddenlucky',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formspree endpoint
    const formEndpoint = 'https://formspree.io/f/xldbdvkg';

    fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
        name: formData.name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast.error('❌ Failed to send message. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          {/* Left: Info and Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Let’s Connect!</h3>
              <p className="text-slate-400 mb-6">
                Feel free to reach out for collaboration, project ideas, or just to say hi. I usually reply within 24 hours.
              </p>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group rounded-xl px-4 py-3 border border-slate-700 hover:border-blue-400 transition bg-transparent"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="p-2 rounded-full bg-slate-900/60"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="text-slate-400 text-xs">{item.label}</div>
                      <div className="text-slate-100 group-hover:text-blue-400 font-medium text-base break-all">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 rounded-2xl border border-slate-700 p-8 bg-transparent"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 transition"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 transition"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 transition resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2.5 rounded-lg shadow-md transition"
              >
                <FaPaperPlane size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </section>
  );
};

export default Contact;
