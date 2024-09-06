import SamuraiAnimation from "./SamuraiAnimation";
import pwn from "../assets/img/categories/pwn.png";
import reverse from "../assets/img/categories/reverse-engineering.png";
import crypto from "../assets/img/categories/cryptography.png";

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
    name: "Cryptography",
    img: crypto,
  },
];

const Showdown = () => {
  return (
    <div className="showdown-container relative mt-56 w-full h-full text-center mx-auto">
      <div className="px-4">
        <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
          Introducing{" "}
          <span className="font-ungai linear-wipe text-4xl sm:text-5xl xl:text-[3.5rem] 2xl:text-[5rem] selection:bg-white">
            showdown
          </span>
        </h1>
        <p className="mt-12 text-base sm:text-lg leading-8 max-w-lg sm:max-w-3xl mx-auto">
          {`Get ready for Showdown—a 1v1 samurai-style duel where teams send their
            top player into battle. Whether it’s reverse engineering, pwn, or
            cryptography, the first to crack the challenge wins points for their
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
      <SamuraiAnimation />
    </div>
  );
};

export default Showdown;
