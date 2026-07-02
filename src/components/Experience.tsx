function Experience() {
  const items = [
    {
      year: "2026",
      title: "AI Engineer",
      description: "Building intelligent systems and AI-powered applications."
    },
    {
      year: "2025",
      title: "Full-Stack Developer",
      description: "Developing modern web and mobile applications."
    },
    {
      year: "2024",
      title: "Software Developer",
      description: "Creating scalable software solutions using multiple technologies."
    }
  ];

  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-10 text-4xl font-bold">Experience</h2>

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.year}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <span className="text-blue-400">{item.year}</span>

            <h3 className="mt-2 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
