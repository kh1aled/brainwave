"use client";

import "@components/styles/price.css";
import Tag from "@components/Tag";

const Price = () => {
  return (
    <section id="Price" className="Price p-4 mt-6">
      <div class="hidden relative justify-center mb-[6.5rem] lg:flex">
        <img
          src="/assets/4-small.png"
          class="relative z-1"
          width="255"
          height="255"
          alt="Sphere"
        />
        <div class="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src="/assets/pricing/stars.svg" class="w-full" width="950" height="400" alt="Stars" />
        </div>
      </div>
      <div className="container">
        <Tag myClass={"price_tag"} value={"Get started with Brainwave"} />

        <h2 className="text-[2.75rem] my-6 leading-[2.5rem] lg:text-center lg:text-[4rem]">
          Pay once, use forever
        </h2>
      </div>
      <div className="realtive mt-20 lg:grid lg:grid-cols-3 gap-6 lg:mt-[10rem]">
        <div className="relative z-1 h-[65rem] mb-[3.25rem] p-8 border border-n-10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <h1 className="text-yellow text-[2.75rem] my-4 leading-[2.5rem]">
            Basic
          </h1>
          <p className="text-n-4 text-[1.3rem] my-4 leading-[2.5rem]">
            AI chatbot, personalized recommendations
          </p>
          <div className="flex items-center h-[5.5rem] mt-[9rem] mb-6">
            <div className="text-[2.4rem] leading-[1.5]">$</div>
            <div className="text-[10.5rem] leading-none font-bold">0</div>
          </div>

          <a
            href="/pricing"
            className="button relative mt-6 inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-8 w-full mb-6"
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

          <ul className="body-2 mt-[3rem]">
            <li className="flex items-center py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An advanced AI chatbot that can understand complex queries
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An analytics dashboard to track your conversations
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                Priority support to solve issues quickly
              </p>
            </li>
          </ul>
        </div>
        <div className="relative z-1 h-[67rem] lg:-translate-y-12 mb-[3.25rem] p-8 border border-n-10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <h1 className="text-bink text-[2.75rem] my-4 leading-[2.5rem]">
            Premium
          </h1>
          <p className="text-n-4 text-[1.3rem] my-4 leading-[2.5rem]">
            Advanced AI chatbot, priority support, analytics dashboard
          </p>
          <div className="flex items-center h-[5.5rem] mt-[9rem] mb-6">
            <div className="text-[2.4rem] leading-[1.5]">$</div>
            <div className="text-[9rem] leading-none font-bold">9.99</div>
          </div>

          <a
            href="/pricing"
            className="button relative mt-6 inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-8 w-full mb-6"
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

          <ul className="body-2 mt-[3rem]">
            <li className="flex items-center py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An advanced AI chatbot that can understand complex queries
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An analytics dashboard to track your conversations
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                Priority support to solve issues quickly
              </p>
            </li>
          </ul>
        </div>
        <div className="relative z-1 h-[63rem] mb-[3.25rem] p-8 border border-n-10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <h1 className="text-red text-[2.75rem] my-4 leading-[2.5rem]">
            Enterprise
          </h1>
          <p className="text-n-4 text-[1.3rem] my-4 leading-[2.5rem]">
            Custom AI chatbot, advanced analytics, dedicated account
          </p>

          <div className="flex items-center h-[9.5rem] mb-6"></div>

          <a href="" className=" mt-10">
            <div className="bg-conic-gradient p-1 rounded-xl">
              <span className="w-full h-full rounded-xl py-4 bg-n-8 text-center text-[1.2rem] hover:text-purple-500 transition duration-300 ease-out">
                CONTACT US
              </span>
            </div>
          </a>

          <ul className="body-2 mt-[3rem]">
            <li className="flex items-center py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An advanced AI chatbot that can understand complex queries
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                An analytics dashboard to track your conversations
              </p>
            </li>
            <li className="flex items-center  py-12 border-t border-n-6">
              <img src="/assets/check.svg" alt="" />
              <p className="ml-4 text-[1.5rem] leading-[2.3rem]">
                Priority support to solve issues quickly
              </p>
            </li>
          </ul>
        </div>
      </div>
      <a
        href=""
        className="font-code text-center my-6 py-2 text-[1.1rem] font-bold tracking-wider uppercase border-b m-auto leading-[1rem] w-[15rem]"
      >
        SEE THE FULL DETAILS
      </a>
    </section>
  );
};

export default Price;
