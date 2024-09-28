import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import samurai1 from '../assets/img/samurai-1.png';
import samurai2 from '../assets/img/samurai-2.png';

gsap.registerPlugin(ScrollTrigger);

const SamuraiAnimation = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".samurai-container", // Use the showdown component as the trigger
        start: "top 80%", // Animation starts when the top of Showdown is at the center of the viewport
        end: "bottom 90%", // Animation ends when the bottom of Showdown is at the center
        scrub: 1,
      },
    });

    // Enter animation
    timeline.fromTo(
      ".left-samurai",
      { x: "-150px", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 }
    );

    timeline.fromTo(
      ".right-samurai",
      { x: "150px", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 },
      "<" // Syncs this animation with the previous one
    );

    // Exit animation (reverse)
    timeline.to(
      ".left-samurai",
      { x: "-150px", opacity: 0, duration: 1 }
    );

    timeline.to(
      ".right-samurai",
      { x: "150px", opacity: 0, duration: 1 },
      "<" // Syncs this animation with the previous one
    );
  }, []);

  return (
    <div className="samurai-container relative w-full">
      <img src={samurai1} alt="Left Samurai" className="left-samurai w-[15rem] sm:w-[30rem] sm:h-[30rem] lg:w-[60rem] lg:h-[60rem]" />
      <img src={samurai2} alt="Right Samurai" className="right-samurai w-[15rem] sm:w-[30rem] sm:h-[30rem] lg:w-[60rem] lg:h-[60rem]" />
    </div>
  );
};

export default SamuraiAnimation;
