import pccLogo from "../assets/img/PCC2024.png";

const Register = () => {

  return (
    <section className="relative px-6 py-24 sm:py-56 lg:static lg:px-8 scroll-mt-24" id="register">
      <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-full lg:mt-20">
        <h1 className="font-heading py-8 text-4xl sm:text-5xl 2xl:text-6xl font-bold uppercase text-center tracking-wide">
          Register Now
        </h1>
      </div>
      <div className="flex items-center justify-center max-w-full mx-auto">
        <form className="form bg-[#aa0000]" action="" method="get">
          <div className="form__image"></div>
          <div className="form__logo">
            <img src={pccLogo} alt="pcc-logo" />
          </div>
          <a href="https://forms.gle/qe8yiiwvtXcx31yD6">
              <button type="button" className="button w-full">
                <div className="button__label">Continue</div>
                <div className="button__icon"></div>
              </button>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Register;
