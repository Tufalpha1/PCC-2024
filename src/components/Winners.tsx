import winner2023 from "../assets/img/winners/winner-2023.gif";
import winner2022 from "../assets/img/winners/winner-2022.gif";
import pcc from "../assets/img/PCC2024.png"

const teams = [
    {
      name: "PCC 2022",
      description:
        "Lexicans",
      img: winner2022,
    },
    {
      name: "PCC 2023",
      description:
        "Team M4lware",
      img: winner2023,
      logo: pcc
    },
  ];
  

const Winners = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-tr from-[#aa0000] to-[#91221E] text-white py-24 sm:py-56" id="winners">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full text-center">
          <div className="selection:bg-black selection:text-white">
            <h1 className="font-heading mt-2 text-4xl sm:text-6xl 2xl:text-7xl uppercase tracking-wide">
              Previous Winners of PCC <span className="stroke text-transparent">2022 and 2023</span>
            </h1>
          </div>
          <dl className="mt-24 mx-auto col-span-2 grid grid-cols-1 gap-y-10 text-base leading-7 text-gray-400 sm:grid-cols-2 lg:gap-y-16 max-w-4xl">
            {teams.map((team) => (
              <div key={team.name} className="relative p-9 bg-black cyber-tile md:cyber-tile-big mx-auto">
                <img src={team.img} alt='team-icon' className="h-10 w-10 sm:w-20 sm:h-20 mb-6 mx-auto cyber-glitch-0 object-cover max-w-full"/>
                <dt className="font-headingThin text-2xl uppercase font-semibold text-white">
                  {team.name}
                </dt>
                <dd className="mt-2">{team.description}</dd>
                {/* Display the logo below if it's provided */}
                {team.logo && (
                  <img
                    src={team.logo}
                    alt="pcc logo"
                    className="hidden md:block mt-6 mx-auto object-contain"
                  />
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Winners