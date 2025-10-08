import warzoneRed from "../assets/img/warzone-red.png";
import warzoneBlue from "../assets/img/warzone-blue.png";

const Warzone = () => {
  return (
    <div className="relative sm:py-64 py-24 w-full text-center mx-auto bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* Left side - Red Warzone */}
      <img
        src={warzoneRed}
        alt="warzone red"
        className="absolute -left-24 sm:-left-[15%] top-1/2 -translate-y-1/2 h-64 sm:h-96 lg:h-[800px] w-auto opacity-80 z-10"
      />
      
      {/* Right side - Blue Warzone */}
      <img
        src={warzoneBlue}
        alt="warzone blue"
        className="absolute -right-24 sm:-right-[15%] top-1/2 -translate-y-1/2 h-64 sm:h-96 lg:h-[800px] w-auto opacity-80 z-10 scale-x-[-1]"
      />
      
      <div className="px-4 pt-16 relative z-10">
        <h1 className="font-headingThin text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl uppercase text-black max-w-3xl mx-auto">
          Introducing{" "}
          <span className="font-heading linear-wipe text-4xl sm:text-5xl xl:text-[3.5rem] 2xl:text-[5rem] selection:bg-white">
            Warzone
          </span>
        </h1>
        <p className="mt-72 sm:mt-12 text-base sm:text-lg max-w-lg sm:max-w-3xl mx-auto text-black">
          {`Master Cybersecurity Like Never Before. The ultimate platform for CTFs, wargames, hands-on cybersecurity training and much more. Learn by doing, compete with peers, and build real-world skills.`}
        </p>
      </div>
    </div>
  );
};

export default Warzone;
