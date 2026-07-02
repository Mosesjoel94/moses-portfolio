function TechStack() {

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "PHP",
    "Python",
    "Flutter",
    "MySQL",
    "Artificial Intelligence"
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        Technology Stack
      </h2>

      <div className="flex flex-wrap gap-4">

        {technologies.map((tech) => (

          <span
            key={tech}
            className="rounded-full border border-slate-700 px-6 py-3"
          >
            {tech}
          </span>

        ))}

      </div>

    </section>
  );
}

export default TechStack;
