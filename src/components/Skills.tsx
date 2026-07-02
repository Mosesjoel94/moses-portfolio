import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython
} from "react-icons/fa";

import {
  SiFlutter,
  SiMysql
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiMysql />, name: "MySQL" }
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-10 text-4xl font-bold">Skills</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-slate-800 p-8 text-center"
          >
            <div className="mb-4 text-5xl">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
