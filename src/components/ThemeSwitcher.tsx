import { useState } from "react";

function ThemeSwitcher() {

  const [, setTheme] = useState("dark");

  return (

    <div className="flex gap-3">

      <button
        className="rounded-lg border border-slate-700 px-3 py-2"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>

      <button
        className="rounded-lg border border-slate-700 px-3 py-2"
        onClick={() => setTheme("corporate")}
      >
        Corporate
      </button>

      <button
        className="rounded-lg border border-slate-700 px-3 py-2"
        onClick={() => setTheme("futuristic")}
      >
        Futuristic
      </button>

    </div>

  );
}

export default ThemeSwitcher;
