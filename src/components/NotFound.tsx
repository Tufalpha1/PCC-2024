export default function NotFound() {
  return (
    <div className=" my-28 sm:my-32 mt-48 flex flex-col items-center justify-center md:mt-72 md:flex-row md:space-x-6">
      <div className="pb-4 pt-6 md:space-y-5">
        <h1 className="py-4 text-6xl stroke font-heading text-transparent leading-9 tracking-widest md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-center md:text-left font-headingThin">
        <p className="mb-4 text-xl md:text-2xl">
          Sorry<span className="font-sans">,</span> The page you were looking
          for doesn<span className="font-sans">'</span>t exist
          <span className="font-sans">.</span>
        </p>
        <a href="/" target="_blank" rel="noreferrer">
          <button className="btn bg-gradient-to-r from-[#aa0000] to-[#91221E]  text-white my-2">
            <span className="btn__content">Homepage_</span>
            <span className="btn__glitch"></span>
          </button>
        </a>
      </div>
    </div>
  );
}
