import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mnqewjgg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          alert("Oops! There was a problem.");
        }
      })
      .catch(() => alert("Oops! There was a problem submitting your form."));
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 1.2 }}
      className={`min-h-screen ${darkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" : "bg-white text-gray-900"} px-4 sm:px-6 md:px-10 lg:px-16 py-6 transition-colors duration-500`}
    >
      <div className="flex justify-end">
        <button onClick={() => setDarkMode(!darkMode)} className="text-2xl p-2 rounded-full focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>

      <header className="text-center py-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-blue-400 drop-shadow-lg"
        >
          Md Safdar Hashmi
        </motion.h1>
        <p className="mt-3 text-md sm:text-lg text-gray-300">B.Tech @ Chandigarh University | Aspiring Software Engineer</p>
      </header>

      <motion.section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10" variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.8 }} viewport={{ once: true }}>
        {["Web Development", "Mobile App Development", "AI & Machine Learning", "Cybersecurity", "System Design", "Software Research"].map((interest, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.05, rotate: 1 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl shadow-xl bg-gray-900 p-5 border border-gray-700 hover:shadow-blue-600 hover:border-blue-500 duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-300 mb-2">{interest}</h2>
            <p className="text-sm text-gray-400">Exploring and building projects in {interest.toLowerCase()} to deepen my skills and make real-world impact.</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section className="py-10 text-center" variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Projects</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-left">
          {[{
            title: "KopyKitabh",
            desc: "An e-commerce website for buying books with product listings and book details.",
            tech: "HTML, CSS, JavaScript"
          }, {
            title: "Chat App (Ongoing)",
            desc: "A real-time chat app with authentication, messaging, and group chats.",
            tech: "MongoDB, Express, React, Node.js, Socket.io, JWT"
          }, {
            title: "Reminder App",
            desc: "A responsive app to add, view, and complete reminders.",
            tech: "Flutter, Figma"
          }, {
            title: "Student Record Management",
            desc: "A system to manage student data including personal info, academic records, and reports.",
            tech: "HTML, CSS, JavaScript, Node.js, Express, MongoDB"
          }].map((proj, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.03 }} 
              transition={{ duration: 0.4 }}
              className="bg-gray-900 border border-gray-700 p-5 rounded-xl shadow hover:shadow-blue-600 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-blue-300">{proj.title}</h3>
              <p className="text-gray-400 mt-2">{proj.desc}</p>
              <p className="text-sm text-gray-500 mt-2">Technologies: {proj.tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="py-10 text-center" variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
          <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-transparent text-sm" />
          <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-transparent text-sm" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-transparent text-sm"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">Send Message</button>
        </form>
      </motion.section>

      <footer className="text-center py-8 border-t border-gray-700">
        <p className="text-sm text-gray-500 mb-3">Let's connect!</p>
        <div className="flex flex-wrap justify-center gap-6 text-xl text-blue-400">
          <a href="https://linkedin.com/in/mdsafdarhashmi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/mdsafdarhashmi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:mdsafdarhashmi@gmail.com"><FaEnvelope /></a>
        </div>
      </footer>
    </motion.main>
  );
}

