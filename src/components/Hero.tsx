import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-6xl font-bold"
        >
          Full-Stack Developer
          <br />

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Engineer
          </span>
        </motion.h1>

        <p className="max-w-3xl text-lg text-slate-300">
          Building intelligent, scalable, and modern digital solutions using
          React, Node.js, PHP, Python, Flutter, MySQL, and Artificial Intelligence.
        </p>

        <div className="mt-8 flex gap-5 text-3xl">
          <a href="https://github.com/Mosesjoel94"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
