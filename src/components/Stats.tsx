function Stats() {

  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "6+", label: "Technologies" },
    { value: "AI", label: "Solutions Engineered" },
    { value: "24/7", label: "Learning Mindset" }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid gap-8 md:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center"
          >

            <h3 className="text-4xl font-bold text-blue-400">
              {item.value}
            </h3>

            <p className="mt-3 text-slate-300">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;
