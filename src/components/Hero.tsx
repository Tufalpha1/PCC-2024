import Banner from "./Banner";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mb-56 sm:mb-[20rem]">
      <Banner />
      <div className="max-w-[1240px] w-full h-full mx-auto px-8 flex justify-center items-center">
        <div className="z-0 mx-auto max-w-6xl sm:pb-24  sm:max-w-5xl ">
          <h1 className="font-heading uppercase text-3xl sm:text-6xl xl:text-7xl 2xl:text-8xl md:py-2 text-white tracking-wide selection:bg-[#ff0000] selection:text-black">
            <span className="text-6xl xl:text-7xl">
              <TextHoverEffect text="2024" />
            </span>{" "}
            <span className="cyber-h-white">
              Pakistan Cybersecurity Challenge
            </span>
          </h1>
          <div className="sm:flex sm:items-center sm:justify-center">
            <p className="p-4 text-slate-300 sm:max-w-[100%] m-auto text-sm sm:text-base 2xl:text-lg text-left">
              Pakistan Cyber Security Challenge (PCC) is a hackathon, a
              capture-the-flag (CTF) event, and a startup challenge (Ideas Cup).
              PCC event is open to all students from Higher Education
              Institutions across Pakistan.
            </p>
            {/* <div className="sm:flex sm:items-center jsm:ustify-evenly max-w-[330px] gap-4 mx-auto p-4">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn bg-gradient-to-r from-[#aa0000] to-[#91221E]  text-white my-2">
                  <span className="btn__content">CTF Platform_</span>
                  <span className="btn__glitch"></span>
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;