"use client";
import "@components/styles/nav.css";
import { useState } from "react";
import Button from "@components/Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar w-100 ">
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
            className={
              isOpen
                ? "list_btn items-center justify-center  text-white opened"
                : "list_btn items-center justify-center  text-white closed"
            }
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          className={
            isOpen ? "mobile_list myImage active" : "mobile_list myImage"
          }
        >
          <ul className="mobile_nav flex-center flex-col gap-2">
            <li className="mob-link">
              <a href="">Features</a>
            </li>
            <li className="mob-link">
              <a href="">Pricing</a>
            </li>
            <li className="mob-link">
              <a href="">How to use</a>
            </li>
            <li className="mob-link">
              <a href="">Roadmap</a>
            </li>
            <li className="mob-link">
              <a href="">new account</a>
            </li>
            <li className="mob-link">
              <a href="">sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
