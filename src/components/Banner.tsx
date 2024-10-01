

const Banner = () => {
  return (
      <div className="relative isolate top-24 mb-32 flex items-center gap-x-6 overflow-hidden text-white bg-gradient-to-r from-[#aa0000] to-[#91221E] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm leading-6 text-white">
                <strong className="font-semibold">PCC 2024</strong>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                Registration ends on 7th October 2024.
              </p>
              <a href="/#register" className="btn bg-black text-white">
                <span className="btn__content">Register now_</span>
                <span className="btn__glitch"></span>
              </a>
            </div>
            <div className="cyber-banner font-heading text-xs lg:text-sm xl:text-base uppercase tracking-wider bg-white text-black">
              13th and 14th November 2024, Air University, Islamabad
            </div>
      </div>
    );
};

export default Banner;
