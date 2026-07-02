import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactCard() {

  return (

    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-4xl font-bold">
        Connect With Me
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <a
          href="mailto:mosesjoel2003@gmail.com"
          className="rounded-2xl border border-slate-800 p-6"
        >
          <FaEnvelope className="mb-4 text-3xl" />
          mosesjoel2003@gmail.com
        </a>

        <a
          href="https://wa.me/254729559759"
          target="_blank"
          className="rounded-2xl border border-slate-800 p-6"
        >
          <FaWhatsapp className="mb-4 text-3xl" />
          +254 729 559 759
        </a>

        <a
          href="https://github.com/Mosesjoel94"
          target="_blank"
          className="rounded-2xl border border-slate-800 p-6"
        >
          <FaGithub className="mb-4 text-3xl" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          className="rounded-2xl border border-slate-800 p-6"
        >
          <FaLinkedin className="mb-4 text-3xl" />
          LinkedIn
        </a>

      </div>

    </section>

  );
}

export default ContactCard;
