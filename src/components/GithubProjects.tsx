import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

function GithubProjects() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {

    fetch("https://api.github.com/users/Mosesjoel94/repos")
      .then(response => response.json())
      .then(data => setRepos(data.slice(0, 6)));

  }, []);

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        GitHub Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {repos.map(repo => (

          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 p-6"
          >

            <h3 className="mb-3 text-2xl font-bold">
              {repo.name}
            </h3>

            <p className="text-slate-400">
              {repo.description ?? "No description provided."}
            </p>

          </a>

        ))}

      </div>

    </section>

  );
}

export default GithubProjects;
