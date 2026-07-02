function Achievements() {

  const achievements = [

    "Built multiple full-stack web applications",
    "Developed AI-powered software solutions",
    "Created mobile applications with Flutter",
    "Integrated payment systems using M-Pesa APIs",
    "Worked with modern frontend and backend technologies"

  ];

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        Achievements
      </h2>

      <div className="space-y-4">

        {achievements.map(item => (

          <div
            key={item}
            className="rounded-xl border border-slate-800 p-6"
          >
            {item}
          </div>

        ))}

      </div>

    </section>

  );
}

export default Achievements;
