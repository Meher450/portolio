import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xrbkdorg/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "New message from portfolio site",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact With Me"
      subtitle="Have a question or want to work together? Reach out!"
    >
      <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 mb-4 text-emerald-700 bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-lg border border-emerald-200 dark:border-emerald-500/20"
              >
                <FaCheckCircle className="flex-shrink-0" size={18} />
                <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none text-sm"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-900 dark:text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/25 shadow-sm transition-all duration-300"
          >
            <FaPaperPlane size={14} />
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>

        {/* Socials & info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
            I'm always open to discussing data-driven projects, ML research,
            collaboration opportunities, or just a friendly conversation about
            technology.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:meherrajuofficial@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 hover:border-cyan-500/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-100 dark:bg-cyan-400/20 transition-colors">
                <FaEnvelope className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm font-medium">Email</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">meherrajuofficial@gmail.com</p>
              </div>
            </a>

            {/* Social links */}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-white/5 hover:border-cyan-500/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-100 dark:bg-cyan-400/20 transition-colors">
                  <social.icon className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm font-medium">
                    {social.label}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{social.href}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
