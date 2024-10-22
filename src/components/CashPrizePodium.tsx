import greenSamurai from "../assets/img/samurai-green.png"
import redSamurai from "../assets/img/samurai-red.png"
import blueSamurai from "../assets/img/samurai-blue.png"

const CashPrizePodium = () => {

  return (
    <div className="my-56 max-w-5xl mx-auto scroll-mt-32" id="prize">
      <h1 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16">
        Cash <span className="stroke text-transparent">prizes</span>
      </h1>
      <p className="my-8 text-sm sm:text-lg text-center px-4">
        Depending on your category (Student/Professional), both the Winner and
        Runner-Up will be rewarded with cash prizes, and much more. The team
        with the highest points will be crowned <span className="linear-wipe font-ungai selection:bg-black">Shogun</span> - The Winner of
        Pakistan Cyber Security Challenge 2024
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl">
        <div>
          <img src={greenSamurai} alt="green samurai" className="h-44 w-44 sm:h-64 sm:w-64 mx-auto" />
          <h3 className="font-ungai text-center text-lg sm:text-xl linear-wipe2">Student</h3>
        </div>
        <div>
          <img src={redSamurai} alt="red samurai" className="h-44 w-44 sm:h-64 sm:w-64 mx-auto" />
          <h3 className="font-ungai text-center text-lg sm:text-xl linear-wipe">Shogun</h3>
        </div>
        <div>
          <img src={blueSamurai} alt="blue samurai" className="h-44 w-44 sm:h-64 sm:w-64 mx-auto" />
          <h3 className="font-ungai text-center text-lg sm:text-xl linear-wipe3">Professional</h3>
        </div>
      </div>
    </div>
  );
};

export default CashPrizePodium;
