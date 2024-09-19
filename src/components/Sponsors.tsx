import offsec from "../assets/img/sponsors/offsec.webp";
import parrotsec from "../assets/img/sponsors/parrotsec.png"
import letsdefend from "../assets/img/sponsors/letsdefend.png"

const Sponsors = () => {
  return (
    <section className="sm:py-16 lg:pt-56 2xl:pt-72 max-w-5xl mx-auto scroll-mt-32" id="sponsors">
      <h1 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16 bg-gradient-to-r from-[#aa0000] to-[#]">
        Sponsors
      </h1>
      <div className="logos">
        <div className="logos-slide flex">
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16"
            src={offsec}
            alt="offsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16 rounded-full"
            src={parrotsec}
            alt="parrotsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-24"
            src={letsdefend}
            alt="letsdefend-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16"
            src={offsec}
            alt="offsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16 rounded-full"
            src={parrotsec}
            alt="parrotsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-24"
            src={letsdefend}
            alt="letsdefend-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16"
            src={offsec}
            alt="offsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-16 rounded-full"
            src={parrotsec}
            alt="parrotsec-logo"
          />
          <img
            className="object-contain w-auto mx-auto h-8 sm:h-24"
            src={letsdefend}
            alt="letsdefend-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
