import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button
          type="button"
          className="z-20 btn w-[120px] h-[50px] sm:w-[170px] sm:h-[50px] text-left fixed bottom-5 right-5 p-2 flex items-center text-white rounded-none bg-[#45cc2d] shadow-xl text-xs font-medium uppercase leading-tight transition duration-150 ease-in-out hover:bg-[#2CFF05] hover:shadow-black hover:shadow-2xl focus:bg-[#2CFF05] focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-[#2CFF05] active:shadow-lg"
          onClick={scrollToTop}
        >
          <ChevronsUp className="h-12 w-12 text-black" />
            Scroll to top_
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
