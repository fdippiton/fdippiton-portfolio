function Resume() {
  return (
    <div className="px-20 " id="resume">
      <div className="h-40 pt-10 flex items-center justify-center">
        <h5 className=" fade-in-top italic text-3xl text-blue_night">RESUME</h5>
      </div>

      <div className="h-20 flex items-center justify-center mb-10">
        <a
          className="py-4 px-10 shadow-lg rounded-xl bg-light_pink text-blue_night hover:bg-blue_night hover:text-banana_maria"
          href="documento.pdf"
          download="francina-resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
