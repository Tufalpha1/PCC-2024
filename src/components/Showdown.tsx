import SamuraiAnimation from "./SamuraiAnimation";
import pwn from "../assets/img/categories/pwn.png";
import reverse from "../assets/img/categories/reverse-engineering.png";
import web from "../assets/img/categories/web-exploitation.png";
import torii from "../assets/img/torii-gate.png";
import showdownUI from "../assets/img/showdown-ui.png"

const categories = [
  {
    name: "Binary Exploitation",
    img: pwn,
  },
  {
    name: "Reverse Engineering",
    img: reverse,
  },
  {
    name: "Web Exploitation",
    img: web,
  },
];

const Showdown = () => {
  return (
    <div className="showdown-container relative mt-56 w-full h-full text-center mx-auto">
      <img
        src={torii}
        alt="torii-gate"
        className="absolute -top-[7rem] sm:-top-[25rem] left-0 right-0 -z-10 mx-auto opacity-50"
      />
      <div className="px-4 pt-16 ">
        <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
          Introducing{" "}
          <span className="font-ungai linear-wipe text-4xl sm:text-5xl xl:text-[3.5rem] 2xl:text-[5rem] selection:bg-white">
            showdown
          </span>
        </h1>
        <p className="mt-12 text-base sm:text-lg leading-8 max-w-lg sm:max-w-3xl mx-auto">
          {`Get ready for Showdown—a 1v1 samurai-style duel where teams send their
            top player into battle. Whether it’s reverse engineering, pwn, or
            web exploitation, the first to crack the challenge wins points for their
            team.`}
        </p>
      </div>
      <h1 className="font-headingThin mt-12 sm:mt-32 text-2xl sm:text-3xl 2xl:text-5xl font-bold tracking-tight uppercase">
        Showdown Categories
      </h1>
      <dl className="flex flex-col md:flex-row items-center justify-center mt-24 max-w-xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative p-9  text-white cyber-box"
          >
            <img
              src={category.img}
              alt="category-icon"
              className="h-16 w-16 sm:w-28 sm:h-28 mb-6 mx-auto"
            />
            <dt className="font-ungai text-2xl uppercase font-semibold text-white">
              {category.name}
            </dt>
          </div>
        ))}
      </dl>
      <h1 className="font-headingThin mt-24 sm:mt-44 text-2xl sm:text-3xl 2xl:text-5xl font-bold tracking-tight uppercase">
        Showdown UI
      </h1>
      <img 
        src={showdownUI}
        alt="showdown-ui"
        className="mx-auto w-[30rem] sm:w-[50rem] my-12 shadow-[#ff0000] shadow-2xl"
      />
      <SamuraiAnimation />
    </div>
  );
};

export default Showdown;
