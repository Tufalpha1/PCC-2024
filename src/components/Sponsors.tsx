import offsec from "../assets/img/sponsors/offsec.jpeg";
import parrotctf from "../assets/img/sponsors/parrot-ctf.webp";
import letsdefend from "../assets/img/sponsors/lets-defend.png";
import rootme from "../assets/img/sponsors/rootme.png";
import futurenostics from "../assets/img/sponsors/futurenostics.png";
import hackerone from "../assets/img/sponsors/hackerone.png";
import hackeronePakistan from "../assets/img/sponsors/hackerone-pakistan.png";

const Sponsors = () => {
  return (
    <section
      className="sm:py-16 lg:pt-56 2xl:pt-72 max-w-5xl px-8 sm:px-0 mx-auto scroll-mt-32 selection:bg-white"
      id="sponsors"
    >
      <h1 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16">
        Sponsors
      </h1>
      <div className="grid items-center grid-cols-1 mt-10 gap-y-12 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-4 lg:gap-x-8 place-items-center">
        <img
          className="object-contain w-auto h-16"
          src={offsec}
          alt="offsec-logo"
        />
        <img
          className="object-contain w-auto h-24"
          src={parrotctf}
          alt="parrotctf-logo"
        />
        <img
          className="object-contain w-auto h-12 lg:h-24"
          src={letsdefend}
          alt="letsdefend-logo"
        />
        <img
          className="object-contain w-auto h-12"
          src={rootme}
          alt="rootme-logo"
        />
      </div>
      <div className="my-12 flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-6">
      <img
          className="object-contain w-auto h-28 sm:h-32"
          src={futurenostics}
          alt="futurenostics-logo"
        />
        <img
          className="object-contain w-auto h-10"
          src={hackerone}
          alt="hackerone-logo"
        />
        <img
          className="object-contain w-auto h-28 sm:h-32"
          src={hackeronePakistan}
          alt="hackerone-pakistan-logo"
        />
      </div>
    </section>
  );
};

export default Sponsors;
