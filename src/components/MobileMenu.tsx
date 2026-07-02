import { useState } from "react";

function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      <button
        className="rounded-lg border border-slate-700 px-3 py-2"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (

        <div className="absolute right-6 mt-2 rounded-xl border border-slate-800 bg-slate-950 p-4">

          <a className="block py-2" href="#about">About</a>
          <a className="block py-2" href="#skills">Skills</a>
          <a className="block py-2" href="#projects">Projects</a>
          <a className="block py-2" href="#contact">Contact</a>

        </div>

      )}

    </div>
  );
}

export default MobileMenu;
