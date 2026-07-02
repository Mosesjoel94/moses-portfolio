function Projects() {

  const projects = [
    {
      title: "LifeLink Ambulance System",
      description:
        "Emergency medical dispatch platform with GPS tracking and M-Pesa integration."
    },

    {
      title: "AI Creator Studio",
      description:
        "AI-powered content creation and automation ecosystem."
    },

    {
      title: "Vehicle Marketplace",
      description:
        "Modern online marketplace for vehicle buying and selling."
    }
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-10 text-4xl font-bold">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {projects.map(project => (

          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 p-8"
          >

            <h3 className="mb-4 text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-slate-300">
              {project.description}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Projects;
