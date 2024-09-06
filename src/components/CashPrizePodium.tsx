import { motion } from "framer-motion";

const CashPrizePodium = () => {
  // Animation variants for the podium items
  const podiumVariant = {
    hidden: { opacity: 0, y: 50 },  // Start from below and invisible
    visible: { 
      opacity: 1, 
      y: 0,       // Move up to normal position
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="my-56 max-w-5xl mx-auto scroll-mt-32" id="prize">
      <h1 className="font-heading uppercase text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center mx-auto my-16">
        Cash prizes
      </h1>
      <p className="my-8 text-sm sm:text-lg text-center px-4">
        Participants will have to compete with other teams to identify the
        vulnerabilities and find solutions to the cyber security problems.
        Register your team now and get a chance to win a cash award.
      </p>
      <div className="podium flex items-end justify-center mx-auto mt-16">
        {/* Second place */}
        <motion.div
          className="podium__item sm:cyber-box"
          variants={podiumVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="podium__city font-headingThin sm:text-2xl">PKR 100,000</p>
          <div
            className="podium__rank second font-heading text-3xl lg:text-5xl"
            data-height="200"
          >
            2
          </div>
        </motion.div>

        {/* First place */}
        <motion.div
          className="podium__item"
          variants={podiumVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="podium__city font-headingThin sm:text-2xl">PKR 300,000</p>
          <div
            className="podium__rank first font-heading text-5xl lg:text-7xl bg-gradient-to-br from-[#aa0000] to-[#91221E]"
            data-height="300"
          >
            1
          </div>
        </motion.div>

        {/* Third place */}
        <motion.div
          className="podium__item cyber-box-3"
          variants={podiumVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="podium__city font-headingThin sm:text-2xl">PKR 50,000</p>
          <div
            className="podium__rank third font-heading text-3xl lg:text-5xl"
            data-height="100"
          >
            3
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CashPrizePodium;
