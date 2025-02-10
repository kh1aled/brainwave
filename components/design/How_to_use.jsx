"use client";

import "@components/styles/how.css";
import Title from "@components/Title";
import Loading from "@components/LoadingAi";

const How = () => {
  return (
    <section id="how" className="how p-4 mt-6">
      <div className="container">
        <Title
          myclassName="chat_title"
          value="Generative AI made for creators."
        />
        <p className="text-Para text-n-4">
          Brainwave unlocks the potential of AI-powered applications
        </p>
      </div>
      <div className="realtive mt-[8rem]">
        <div className="relative bg-item z-1 flex items-center justify-center h-[59rem] mb-[3.25rem]  border border-n-10 rounded-3xl overflow-hidden xl:h-[46rem]">
          <div className=" absolute left-0 top-0 w-full h-full ">
            <img
              className="w-full h-full object-cover md:object-right"
              src="/assets/services/service-1.png"
              alt=""
            />
          </div>
          <div className="relative z-1 max-w-[30rem]">
            <h4 className="text-[3.3rem] leading-[1.5rem] mb-4">Smartest AI</h4>
            <p className="text-[1.4rem] leading-[2rem] mt-[3rem] mb-[3rem] text-n-3">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <ul className="body-2">
              <li className="flex items-center py-7 border-t border-n-6">
                <img src="/assets/check.svg" alt="" />
                <p className="ml-4 text-[1.5rem] leading-[1.5rem]">
                  Photo generating
                </p>
              </li>
              <li className="flex items-center  py-7 border-t border-n-6">
                <img src="/assets/check.svg" alt="" />
                <p className="ml-4 text-[1.5rem] leading-[1.5rem]">
                  Photo enhance
                </p>
              </li>
              <li className="flex items-center  py-7 border-t border-n-6">
                <img src="/assets/check.svg" alt="" />
                <p className="ml-4 text-[1.5rem] leading-[1.5rem]">
                  Seamless Integration
                </p>
              </li>
            </ul>
          </div>
          <Loading myclassName="how_loading" />
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-6 lg:px-[5rem]">
          <div className="relative bg-item-2 z-1 flex items-end justify-center h-[59rem] lg:h-[70rem] mb-[3.25rem] p-8 border border-n-10 rounded-3xl overflow-hiddenxl:h-[46rem]">
            <div className=" absolute left-0 top-0 w-full h-full ">
              <img
                className="w-full h-full object-cover md:object-right"
                src="/assets/services/service-2.png"
                alt=""
              />
            </div>
            <div className="absolute top-8 right-8 max-w-[27.5rem] py-12  px-12 bg-black rounded-t-xl rounded-bl-xl font-code text-[1.5rem] leading-7 lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
              Hey Brainwave, enhance this photo
              <svg
                className="absolute left-full bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="37"
              >
                <path
                  className=""
                  d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                ></path>
              </svg>
            </div>
            <div className="relative z-1 max-w-[30rem]">
              <h4 className="text-[3.3rem] leading-[1.5rem] mb-4">
                Photo editing{" "}
              </h4>
              <p className="text-[1.4rem] leading-[2rem] mt-[3rem] mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app's photo
                editing feature. Try it now!
              </p>
            </div>
          </div>
          <div className="relative  lg:p-[2rem]  bg-item-3 z-1 flex items-center flex-col justify-start h-[59rem] sm:h-[70rem] mb-[3.25rem] lg:h-[70rem] p-8 border border-n-10 rounded-3xl overflow-hidden  xl:h-[46rem]">
            <div className="relative z-1 max-w-[30rem] mt-[8rem]">
              <h4 className="text-[3.3rem] leading-[1.5rem] mb-4">
                Photo editing{" "}
              </h4>
              <p className="text-[1.4rem] leading-[2rem] mt-[3rem] mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app's photo
                editing feature. Try it now!
              </p>
            </div>

            <ul className="flex items-center justify-between gap-[3rem]">
              <li className="rounded-3xl flex items-center justify-center  w-14 h-14 bg-n-6 md:w-14 md:h-14">
                <div>
                  <img src="/assets/recording-03.svg" alt="" />
                </div>
              </li>
              <li className="rounded-3xl flex items-center justify-center  w-14 h-14 bg-n-6 md:w-14 md:h-14">
                <div>
                  <img src="/assets/recording-01.svg" alt="" />
                </div>
              </li>
              <li className="rounded-3xl bg-conic-gradient flex p-1 items-center justify-center w-20 h-20  md:w-20 md:h-20">
                <div className="rounded-3xl bg-item-3 w-full h-full flex justify-center items-center">
                  <img src="/assets/disc-02.svg" alt="" />
                </div>
              </li>
              <li className="rounded-3xl flex items-center justify-center  w-14 h-14 bg-n-6 md:w-14 md:h-14">
                <div>
                  <img src="/assets/chrome-cast.svg" alt="" />
                </div>
              </li>
              <li className="rounded-3xl flex items-center justify-center  w-14 h-14 bg-n-6 md:w-14 md:h-14">
                <div>
                  <img src="/assets/sliders-04.svg" alt="" />
                </div>
              </li>
            </ul>

            <div className="relative w-full h-[24rem] lg:h-[36rem] mt-[4rem] bg-n-8 rounded-xl overflow-hidden sm:h-[40rem] md:h-[25rem]">
              <img
                src="/assets/services/service-3.png"
                className="w-full h-full object-cover"
                width="520"
                height="400"
                alt="Scary robot"
              />
              <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
                Video generated!
                <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
                  <img
                    src="/assets/brainwave-symbol-white.svg"
                    width="26"
                    height="26"
                    alt="Brainwave"
                  />
                </div>
                <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
                  just now
                </p>
                <svg
                  className="absolute right-full bottom-0 -scale-x-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="37"
                >
                  <path
                    className="fill-n-6"
                    d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
                  ></path>
                </svg>
              </div>
              <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
                <img
                  src="/assets/play.svg"
                  width="24"
                  height="24"
                  alt="Play"
                  className="object-contain mr-3"
                />
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
