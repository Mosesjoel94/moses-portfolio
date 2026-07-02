function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Moses Joel"
            className="h-80 w-80 rounded-full border-4 border-slate-700 object-cover shadow-2xl"
          />
        </div>

        <div>

          <h2 className="mb-6 text-4xl font-bold">
            About Me
          </h2>

          <p className="mb-6 text-lg text-slate-300">
            I am Moses Joel, a Full-Stack Developer, AI Engineer,
            and Software Developer based in Nairobi, Kenya.
          </p>

          <p className="mb-6 text-slate-400">
            Currently pursuing a Bachelor of Science in Informatics
            at Moi University (2024–2028), I specialize in building
            scalable web applications, mobile solutions, and
            intelligent systems powered by Artificial Intelligence.
          </p>

          <p className="text-slate-400">
            My technology stack includes React, Node.js, PHP,
            Python, Flutter, MySQL, cloud technologies,
            and modern AI frameworks.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
