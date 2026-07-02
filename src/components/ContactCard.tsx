import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaPhone
} from "react-icons/fa";

function ContactCard() {

  return (

    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >

      <h2 className="mb-4 text-4xl font-bold">
        Contact Me
      </h2>

      <p className="mb-10 text-slate-400">
        Available for freelance projects, AI solutions, full-stack development,
        and software engineering collaborations.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        <a
          href="mailto:mosesjoel2003@gmail.com"
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:scale-105"
        >
          <FaEnvelope className="mb-4 text-3xl" />

          <h3 className="mb-2 text-xl font-semibold">
            Email
          </h3>

          <p className="text-slate-300">
            mosesjoel2003@gmail.com
          </p>
        </a>

        <a
          href="tel:+254729559759"
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:scale-105"
        >
          <FaPhone className="mb-4 text-3xl" />

          <h3 className="mb-2 text-xl font-semibold">
            Phone
          </h3>

          <p className="text-slate-300">
            0729 559 759
          </p>
        </a>

        <a
          href="https://wa.me/254729559759"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:scale-105"
        >
          <FaWhatsapp className="mb-4 text-3xl" />

          <h3 className="mb-2 text-xl font-semibold">
            WhatsApp
          </h3>

          <p className="text-slate-300">
            +254 729 559 759
          </p>
        </a>

        <a
          href="https://github.com/Mosesjoel94"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:scale-105"
        >
          <FaGithub className="mb-4 text-3xl" />

          <h3 className="mb-2 text-xl font-semibold">
            GitHub
          </h3>

          <p className="text-slate-300">
            github.com/Mosesjoel94
          </p>
        </a>

      </div>

    </section>

  );
}

export default ContactCard;
