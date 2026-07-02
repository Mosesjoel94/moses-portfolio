import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

function Hero() {

  return (

    <section className="flex min-h-screen items-center px-6 pt-20">

      <div className="mx-auto max-w-7xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-6xl font-bold"
        >

          Moses Joel

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Developer & AI Engineer
          </span>

        </motion.h1>

        <p className="max-w-4xl text-lg leading-8 text-slate-300">

          Building intelligent, scalable, and modern digital solutions using
          React, Node.js, PHP, Python, Flutter, MySQL, and Artificial Intelligence.
          Passionate about creating innovative software that solves real-world
          problems through elegant engineering.

        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:scale-105"
          >
            Download CV
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-slate-700 px-8 py-3 font-semibold"
          >
            View Projects
          </a>

        </div>

        <div className="mt-10 flex gap-6 text-3xl">

          <a href="https://github.com/Mosesjoel94">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

        </div>

      </div>

    </section>

  );
}

export default Hero;
