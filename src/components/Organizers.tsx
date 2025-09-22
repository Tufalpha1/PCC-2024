import nccs from "../assets/img/organizers/nccs.png";
import cluster from "../assets/img/organizers/cluster.png";
import hec from "../assets/img/organizers/hec.png";
import au from "../assets/img/organizers/au.png";
import govt from "../assets/img/organizers/govt.png";
import airoverflow from "../assets/img/organizers/airoverflow.png";
import recypher from "../assets/img/organizers/recypher.png";

const Organizers = () => {
  return (
    <section
      className="py-12 bg-gradient-to-br from-[#45CC2D] to-[#092004] sm:py-16 lg:py-56 2xl:py-72  scroll-mt-32 selection:bg-black selection:text-white"
      id="organizers"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="font-heading uppercase max-w-5xl text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto mt-16">
          Technical & Strategic Partners
        </h2>
        <p className="text-center text-base sm:text-lg leading-8 max-w-3xl mx-auto my-4">
          Collaborating with industry leaders
        </p>
        <div className="grid place-items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 max-w-3xl mx-auto">
          <img
            className="object-contain w-auto mx-auto h-24 sm:h-28"
            src={airoverflow}
            alt="airoverflow-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-24 sm:h-32"
            src={cluster}
            alt="cluster-logo"
          />
        </div>
      </div>
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 py-12">
        <h2 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto mt-16 stroke text-transparent">
          Organizers & Patrons
        </h2>
        <p className="text-center text-base sm:text-lg leading-8 max-w-3xl mx-auto my-4">
          Proudly supported by leading organizations
        </p>
        <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-8">
          <img
            className="object-contain w-auto mx-auto h-28 sm:h-28"
            src={nccs}
            alt="nccs-logo"
          />
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
            className="object-contain w-auto mx-auto h-20 sm:h-24"
            src={recypher}
            alt="recypher-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Organizers;
