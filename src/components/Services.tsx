function Services() {

  const services = [

    {
      title: "Full-Stack Development",
      description: "Modern web applications using React, Node.js, PHP, and MySQL."
    },

    {
      title: "AI Engineering",
      description: "Intelligent systems powered by Python and modern AI technologies."
    },

    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications with Flutter."
    }

  ];

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        Services
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {services.map(service => (

          <div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
          >

            <h3 className="mb-4 text-2xl font-bold">
              {service.title}
            </h3>

            <p className="text-slate-300">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;
