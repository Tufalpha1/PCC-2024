import podium from '../assets/img/podium.png'

const Podium = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-tr from-[#aa0000] to-[#91221E] text-white py-24 sm:py-32 selection:bg-black selection:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="font-headingThin cyber-h-white mt-2 text-4xl sm:text-6xl 2xl:text-7xl font-bold tracking-tight uppercase">
                See your team on the podium
              </p>
              <p className="mt-6 text-base sm:text-lg leading-8">
                {`Top 3 winners will be rewarded with cash prizes and more. So don't miss out on this.`}
              </p>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
              <img
                src={podium}
                alt="pcc-podium"
                className="w-[25rem] ml-auto cyber-box-2 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] max-w-none sm:mx-0 md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podium