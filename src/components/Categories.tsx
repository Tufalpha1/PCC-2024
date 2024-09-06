import pwn from "../assets/img/categories/pwn.png";
import reverse from "../assets/img/categories/reverse-engineering.png";
import forensics from "../assets/img/categories/forensics.png";
import crypto from "../assets/img/categories/cryptography.png";
import web from "../assets/img/categories/web-exploitation.png";
import misc from "../assets/img/categories/miscellaneous.png";

const categories = [
  {
    name: "PWN",
    description:
      "Exploit binary vulnerabilities to gain access and control over the system.",
    img: pwn,
  },
  {
    name: "Reverse Engineering",
    description:
      "Analyze and deconstruct compiled code to uncover hidden functionalities and security flaws.",
    img: reverse,
  },
  {
    name: "forensics",
    description:
      "Investigate and analyze digital artifacts to uncover hidden evidence.",
    img: forensics,
  },
  {
    name: "Cryptography",
    description:
      "Decrypt encoded messages and secure communications by breaking cryptographic algorithms.",
    img: crypto,
  },
  {
    name: "Web exploitation",
    description: "Identify and exploit vulnerabilities in web applications.",
    img: web,
  },
  {
    name: "Miscellaneous",
    description: "Solve unique and challenging problems.",
    img: misc,
  },
];

const Categories = () => {
  return (
    <div className="py-56 bg-white text-black w-full" id="categories">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-full grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-items-center ">
          <div>
            <h1 className="font-headingThin cyber-h-black mt-2 text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight uppercase">
              Categories
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-800">
              PCC is a jeopardy-style competition and team based both in the
              qualification and final stages. Participants will be challenged
              across a range of categories during the competition including Web,
              Reverse Engineering, PWN, Crypto and Forensics.
            </p>
          </div>
          <dl className="mt-24 col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-400 sm:grid-cols-2 lg:gap-y-16">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative p-9 bg-black cyber-box"
              >
                <img
                  src={category.img}
                  alt="category-icon"
                  className="h-12 w-12 sm:w-24 sm:h-24 mb-6"
                />
                <dt className="font-headingThin text-xl sm:text-2xl uppercase font-semibold text-white tracking-wider">
                  {category.name}
                </dt>
                <dd className="mt-2">{category.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Categories;
