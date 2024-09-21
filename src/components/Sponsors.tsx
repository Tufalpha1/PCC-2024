import offsec from "../assets/img/sponsors/offsec.jpeg";
import parrotsec from "../assets/img/sponsors/parrotsec.png";
import letsdefend from "../assets/img/sponsors/letsdefend.png";

const Sponsors = () => {
  return (
    <section
      className="sm:py-16 lg:pt-56 2xl:pt-72 max-w-5xl mx-auto scroll-mt-32 selection:bg-white"
      id="sponsors"
    >
      <h1 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16 bg-gradient-to-r from-[#aa0000] to-[#]">
        Sponsors
      </h1>
      <div className="relative my-24 w-full overflow-hidden bg-black before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          <div className="slide flex w-full items-center justify-center">
            <img
              className="object-contain w-auto mx-auto h-16"
              src={offsec}
              alt="offsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={parrotsec}
              alt="parrotsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={letsdefend}
              alt="letsdefend-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={offsec}
              alt="offsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={parrotsec}
              alt="parrotsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={letsdefend}
              alt="letsdefend-logo"
            />
          </div>
          <div className="slide flex w-full items-center justify-center">
            <img
              className="object-contain w-auto mx-auto h-16"
              src={offsec}
              alt="offsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={parrotsec}
              alt="parrotsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={letsdefend}
              alt="letsdefend-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={offsec}
              alt="offsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={parrotsec}
              alt="parrotsec-logo"
            />
            <img
              className="object-contain w-auto mx-auto h-16"
              src={letsdefend}
              alt="letsdefend-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
