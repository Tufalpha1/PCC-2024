import nccs from "../assets/img/organizers/nccs.png";
import hec from "../assets/img/organizers/hec.png";
import au from "../assets/img/organizers/au.png";
import govt from "../assets/img/organizers/govt.png";
import airoverflow from "../assets/img/organizers/airoverflow.png";
import byteboltsec from "../assets/img/organizers/byteboltsec.png";

const Organizers = () => {
  return (
    <section
      className="py-12 bg-gradient-to-r from-[#aa0000] to-[#91221E] sm:py-16 lg:py-56 2xl:py-72  scroll-mt-32 selection:bg-black selection:text-white"
      id="organizers"
    >
      <div className="px-4 mx-auto max-w-2xl sm:px-6 lg:px-8">
        <h2 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16">
          Organizers
        </h2>
        <div className="grid place-items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8">
          <img
            className="object-contain w-auto mx-auto h-24 sm:h-28"
            src={airoverflow}
            alt="airoverflow-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-16 sm:h-24"
            src={nccs}
            alt="nccs-logo"
          />
        </div>
      </div>
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16 stroke text-transparent">
          Patrons
        </h2>
        <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
          <img
            className="object-contain w-auto mx-auto h-16 sm:h-20"
            src={hec}
            alt="hec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-16 sm:h-20"
            src={au}
            alt="au-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-20 sm:h-24"
            src={govt}
            alt="govt-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-28 sm:h-28"
            src={byteboltsec}
            alt="byteboltsec-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Organizers;
