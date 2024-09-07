import scoreboard from '../assets/img/scoreboard.png'

const Scoreboard = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-[#aa0000] to-[#91221E] text-white py-24 sm:py-32 selection:bg-black selection:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="font-headingThin cyber-h-white mt-2 text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight uppercase">
                Compete against the best
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8">
                Bring your best and solve the most complex challenges that you could ever think of.
              </p>
            </div>
          </div>
          <img
            src={scoreboard}
            alt="pcc-scoreboard"
            className="w-[25rem] ml-auto cyber-box shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] max-w-none sm:mx-0 md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Scoreboard