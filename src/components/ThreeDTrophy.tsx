import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import trophy from "../assets/img/trophy.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeDTrophy = () => {
  const toriiRef = useRef(null); // Reference for the Torii gate element

  useEffect(() => {
    // GSAP animation: Animate the Torii gate from below as you scroll
    gsap.fromTo(
      toriiRef.current,
      { y: 300, opacity: 0 }, // Initial position below the screen
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: toriiRef.current,
          start: "top 80%", // Animation starts when the Torii gate is 80% from the top of the viewport
          end: "top 30%", // Ends when it is 30% from the top
          scrub: true, // Smoothens the animation
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <h1 className="font-heading text-2xl sm:text-3xl 2xl:text-5xl font-bold tracking-wide uppercase text-center">
        Presenting you the{" "}
        <span className="font-ungai linear-wipe tracking-normal">
          showdown trophy
        </span>
      </h1>
      <CardContainer>
        <CardBody className="bg-transparent relative group/card w-[20rem] md:w-[30rem] h-auto rounded-xl p-6">
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-1}
            className="w-full mt-4"
          >
            <img
              src={trophy}
              className="w-full object-covergroup-hover/card:shadow-xl z-20 bg-transparent"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ThreeDTrophy;
