"use client";
import "@components/styles/nav.css";
import { useRef, useState } from "react";
import Button from "@components/Button";
import Link from "@node_modules/next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="navbar w-100 bg-n-9 border-b border-n-6 lg:bg-n-8/90 backdrop-blur-md ">
      <div className="container  conmx-auto lg:px-8">
        <div className="flex-between p-8 links">
          {/* brand logo */}
          <div className="brand">
            <img src="/assets/brainwave.svg" alt="" />
          </div>

          {/*links navbar */}
          <div className="nav-links flex-between gap-6">
            <a href="" className="nav-link">
              Features
            </a>
            <a href="" className="nav-link">
              Pricing
            </a>
            <a href="" className="nav-link">
              How to use
            </a>
            <a href="" className="nav-link">
              Roadmap
            </a>
          </div>

          {/* login  */}

          <div className="login_container flex-center gap-11">
            <button className="new_acc text-uppercase">new account</button>
            {/* <button className="signin">sign in</button> */}
            <Button myclassName="signin" value="sign in" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`list_btn clipped_2 items-center justify-center bg-conic-gradient p-1  text-white ${
              isOpen ? "opened" : "closed"
            }`}
          >
            <div className="w-full clipped_2 h-full flex justify-center items-center flex-col bg-n-8">
              <span></span>
              <span></span>
            </div>
          </button>
          {/* 
          <button class="button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-3 text-n-1 ml-auto lg:hidden">
            <span class="relative z-10">
              <svg
                class="overflow-visible"
                width="20"
                height="12"
                viewBox="0 0 20 12"
              >
                <rect
                  class="transition-all origin-center"
                  y="0"
                  width="20"
                  height="2"
                  rx="1"
                  fill="white"
                  transform="rotate(0)"
                ></rect>
                <rect
                  class="transition-all origin-center"
                  y="10"
                  width="20"
                  height="2"
                  rx="1"
                  fill="white"
                  transform="rotate(0)"
                ></rect>
              </svg>
            </span>
            <svg
              class="absolute top-0 left-0"
              width="21"
              height="44"
              viewBox="0 0 21 44"
            >
              <path
                fill="none"
                stroke="url(#btn-left)"
                stroke-width="2"
                d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
              ></path>
            </svg>
            <svg
              class="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
              height="44"
              viewBox="0 0 100 44"
              preserveAspectRatio="none"
              fill="none"
            >
              <polygon
                fill="url(#btn-top)"
                fill-rule="nonzero"
                points="100 42 100 44 0 44 0 42"
              ></polygon>
              <polygon
                fill="url(#btn-bottom)"
                fill-rule="nonzero"
                points="100 0 100 2 0 2 0 0"
              ></polygon>
            </svg>
            <svg
              class="absolute top-0 right-0"
              width="21"
              height="44"
              viewBox="0 0 21 44"
            >
              <path
                fill="none"
                stroke="url(#btn-right)"
                stroke-width="2"
                d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
              ></path>
            </svg>
          </button> */}
        </div>
        <div
          className={
            isOpen ? "mobile_list relative active" : "mobile_list myImage"
          }
        >
          <div class="absolute inset-0 pointer-events-none lg:hidden">
            <div class="absolute inset-0 opacity-[.03]">
              <img
                class="w-full h-full object-cover"
                src="/assets/background.jpg"
                width="688"
                height="953"
                alt="Background"
              />
            </div>
            <div class="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
              <div class="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div class="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div class="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
            <div class="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
            <div class="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
            <div class="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
            <div class="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
          </div>
          <ul className="mobile_nav flex-center flex-col gap-2">
            <li className="mob-link" onClick={() => setIsOpen((prev) => !prev)}>
              <Link href={"#features"} onClick={() => setIsOpen((prev) => !prev)}>
                Features
              </Link>
            </li>
            <li className="mob-link">
              <Link href={"#Price"} onClick={() => setIsOpen((prev) => !prev)}>
                Pricing
              </Link>
            </li>
            <li className="mob-link">
              <Link href={"#how"} onClick={() => setIsOpen((prev) => !prev)}>
                How to use
              </Link>
            </li>
            <li className="mob-link">
              <Link href={"#work"} onClick={() => setIsOpen((prev) => !prev)}>
                Roadmap
              </Link>
            </li>
            <li className="mob-link">
              <Link href={"#"} onClick={() => setIsOpen((prev) => !prev)}>
                new account
              </Link>
            </li>
            <li className="mob-link">
              <Link href={"#"} onClick={() => setIsOpen((prev) => !prev)}>
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
