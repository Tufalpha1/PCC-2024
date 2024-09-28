import pcc from "../assets/img/PCC2024.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 flex items-center scroll-mt-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 px-8">
          <h2 className="font-headingThin uppercase cyber-h-white py-4 text-4xl sm:text-5xl 2xl:text-6xl tracking-wide">
            About Us
          </h2>
          <div className="py-2 text-sm sm:text-base text-gray-200">
            <p className="my-2">
              AirOverflow in collaboration with National Center for Cyber
              Security (NCCS) are organizing Pakistan Cyber Security Challenge
              (PCC), a Hackathon and Capture-the-Flag (CTF) event, crypto
              challenge, and a startup challenge (ideas cup). This event is open
              for both students and professionals from all across Pakistan.
            </p>
            <p className="my-6">
              In a connected world, digital devices and services have become an
              integral part of our everyday lives. At the same time, such
              devices and services are also increasingly exploited by criminals
              for cyber-related and cyber-enabled crimes. To address these
              challenges, there is an urgent need for a new breed of
              cybersecurity experts who understand new security vulnerabilities
              and develop ways to secure new devices and services in the digital
              realm. Pakistan cyber security challenge offers a platform to
              develop and identify a talented pool for a secure resilient,
              robust and cyber secure Pakistan.It will give a unique opportunity
              to students to participate in various competitions and show their
              mettle.
            </p>
          </div>
        </div>
        <div className="relative cyber-box-3 bg-gradient-to-r from-[#aa0000] to-[#91221E] flex flex-col items-center justify-center p-8">
          <img
            src={pcc}
            className="mx-auto my-12 z-0"
            alt="About me"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
