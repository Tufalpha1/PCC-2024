import ThreeDBanner from "./ThreeDBanner";

const Badge = () => {
  return (
    <section
      className="overflow-hidden bg-gradient-to-br from-[#aa0000] to-[#91221E] text-white py-24 sm:py-44 selection:bg-black selection:text-white scroll-mt-32"
      id="badge"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="font-headingThin cyber-h-white mt-2 text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight uppercase">
                Presenting the PCC Badge
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8">
                PCC finalists will receive an exclusive PCC Badge, just like the
                iconic hardware cards at DEFCON! This badge is your mark of
                honor, earned through skill, strategy, and determination. Wear
                it with pride and show the world you're among Pakistan's elite
                cyber warriors!
              </p>
            </div>
          </div>
          <ThreeDBanner />
        </div>
      </div>
    </section>
  );
};

export default Badge;
