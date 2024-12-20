import SamuraiAnimation from "./SamuraiAnimation";
import redSamurai from "../assets/img/samurai-red.png"
import pwn from "../assets/img/categories/pwn.png";
import reverse from "../assets/img/categories/reverse-engineering.png";
import web from "../assets/img/categories/web-exploitation.png";
import torii from "../assets/img/torii-gate.png";
import showdownUI from "../assets/img/showdown-ui.png";
import ThreeDTrophy from "./ThreeDTrophy";

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
    <div className="samurai-container relative mt-44 w-full text-center mx-auto">
      <img
        src={torii}
        alt="torii-gate"
        className="absolute -top-[7rem] sm:-top-[25rem] left-0 right-0 -z-10 mx-auto opacity-50"
      />
      <div className="px-4 pt-16">
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
      <img src={redSamurai} alt="red samurai" className="h-44 w-44 sm:h-80 sm:w-80 mx-auto" />
      <h1 className="font-headingThin mt-12 text-2xl sm:text-3xl 2xl:text-5xl font-bold tracking-tight uppercase">
        Showdown Categories
      </h1>
      <dl className="flex flex-col md:flex-row items-center justify-center mt-12 max-w-xl mx-auto">
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
      <div className="mx-auto mt-24 sm:mt-[20rem]">
        <h1 className="font-headingThin text-2xl sm:text-3xl 2xl:text-5xl font-bold tracking-tight uppercase">
          Showdown UI
        </h1>
        <img
          src={showdownUI}
          alt="showdown-ui"
          className="mx-auto w-[30rem] sm:w-[50rem] my-12 shadow-[#ff0000] shadow-2xl"
        />
      </div>
      <div className="relative max-w-5xl mx-auto mt-[20rem] sm:mt-[10rem]">
        <ThreeDTrophy />
        <img
          src="https://i.gifer.com/Z6W8.gif"
          alt="flowers"
          className="absolute top-[10rem] sm:left-52 sm:w-[30rem] z-10"
        />
      </div>
      <SamuraiAnimation />
    </div>
  );
};

export default Showdown;
