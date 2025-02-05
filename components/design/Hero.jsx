"use client";
import Loading from "@components/LoadingAi";
import "@components/styles/hero.css";
const Hero = () => {
  return (
    <section className='hero  pt-[16rem] -mt-[5.25rem]" mb-[4rem] text-center relative'>
      <div className="container">
        <div className="circle c1"></div>
        <h1 className="h1 relative z-2 mb-[4rem]">
          Explore the <br /> Possibilities <br /> of AI Chatting with <br />{" "}
          <span className="inline-block relative">
            Brainwave{" "}
            <img
              width={"624"}
              height={"28"}
              className="absolute top-full left-0 w-full xl:-mt-2"
              src="/assets/hero/curve.png"
            />
          </span>
        </h1>
        <p className="p body-1 z-1 max-w-3xl mx-auto  relative text-n-2 lg:mb-8">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>
      
        <a
          href="/pricing"
          className="button relative w-[17rem] mt-6 inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-8  my-10"
        >
          <span className="relative z-10 text-n-8 pt-6 text-[1.4rem] font-bold">
            Get started
          </span>
          <svg
            className="absolute top-0 left-0"
            width="21"
            height="44"
            viewBox="0 0 21 44"
          >
            <path
              fill="white"
              stroke="white"
              strokeWidth="2"
              d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
            ></path>
          </svg>
          <svg
            className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
            height="44"
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
            fill="white"
          >
            <polygon
              fill="white"
              fillRule="nonzero"
              points="100 0 100 44 0 44 0 0"
            ></polygon>
          </svg>
          <svg
            className="absolute top-0 -right-[0.8rem]"
            width="21"
            height="44"
            viewBox="0 0 21 44"
          >
            <path
              fill="white"
              stroke="white"
              strokeWidth="2"
              d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
            ></path>
          </svg>
        </a>
        <div className="img_container mt-[4rem] relative max-w-[33rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* <img src="/assets/hero/robot.jpg" className="absloute img_bg" alt="" /> */}
          <div className="absolute image_inside -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              className="w-full h-full object-cover "
              src="/assets/hero/hero-background.jpg"
              alt=""
            />
          </div>
          <div className="relative z-1 p-0.5 overflow-hidden rounded-2xl  bg-conic-gradient">
            <div className="robot_image w-full ">
              <div className="top_banner w-full absolute"></div>
              <img src="/assets/hero/robot.jpg" alt="" />
              {/* <div className="loading_ai absolute flex justify-start items-center gap-3">
                    <img src="assets/loading.png" alt="" />
                    <span>Ai is generating</span>
                  </div> */}

              <Loading myclassName={"hero_loading"} />
            </div>
            <div className="bottom_div relative w-full ">
              <div className="bottom_1"></div>
              <div className="bottom_2"></div>
            </div>
          </div>
          <div className="absolute -top-[79.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <span className="mySpan">
              <span>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                  <div className="w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                  <div className="w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                  <div className="hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                  <div className="w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                  <div className="w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                  <div className="w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100"></div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
