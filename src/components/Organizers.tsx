import nccs from '../assets/img/organizers/nccs.png'
import hec from '../assets/img/organizers/hec.png'
import au from '../assets/img/organizers/au.png'
import govt from '../assets/img/organizers/govt.png'
import airoverflow from '../assets/img/organizers/airoverflow.png'


const Organizers = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#aa0000] to-[#91221E] sm:py-16 lg:py-56 2xl:py-72  scroll-mt-32" id='organizers'>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <h2 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16">
            Organizers & <span className="stroke text-transparent">Patrons</span>
          </h2>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-3 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-8">
            <img
              className="object-contain w-auto mx-auto h-12 sm:h-20"
              src={nccs}
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-16 sm:h-24"
              src={hec}
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-16 sm:h-24"
              src={au}
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-16 sm:h-24"
              src={govt}
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-16 sm:h-24"
              src={airoverflow}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
