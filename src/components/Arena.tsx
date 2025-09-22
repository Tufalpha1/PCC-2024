import arena from "../assets/img/arena.svg";
import pwn from "../assets/img/categories/pwn.png";
import reverse from "../assets/img/categories/reverse-engineering.png";
import web from "../assets/img/categories/web.png";
import torii from "../assets/img/torii-gate.png";

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

const Arena = () => {
  return (
    <div className="samurai-container relative mt-44 w-full text-center mx-auto">
      <img
        src={arena}
        alt="arena"
        className="absolute h-44 w-44 sm:h-80 sm:w-80 -top-[7rem] left-0 right-0 -z-10 mx-auto opacity-70"
      />
      <div className="px-4 pt-16">
        <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl uppercase">
          Introducing{" "}
          <span className="font-headingThin linear-wipe4 text-4xl sm:text-5xl xl:text-[3.5rem] 2xl:text-[5rem] selection:bg-white">
            Arena
          </span>
        </h1>
        <p className="mt-12 text-base sm:text-lg leading-8 max-w-lg sm:max-w-3xl mx-auto">
          {`Master Cybersecurity Like Never Before. The ultimate platform for CTFs, wargames, hands-on cybersecurity training and much more. Learn by doing, compete with peers, and build real-world skills.`}
        </p>
      </div>
    </div>
  );
};

export default Arena;
