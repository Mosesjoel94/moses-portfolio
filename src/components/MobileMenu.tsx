import { useState } from "react";

function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (

    <div className="md:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-slate-700 px-3 py-2"
      >
        ☰
      </button>

      {open && (

        <div className="absolute right-6 mt-2 rounded-xl border border-slate-800 bg-slate-950 p-4">

          <a href="#about" className="block py-2">About</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#contact" className="block py-2">Contact</a>

        </div>

      )}

    </div>

  );
}

export default MobileMenu;
