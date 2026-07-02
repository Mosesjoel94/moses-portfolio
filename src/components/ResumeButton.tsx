function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:scale-105"
    >
      Download Resume
    </a>
  );
}

export default ResumeButton;
