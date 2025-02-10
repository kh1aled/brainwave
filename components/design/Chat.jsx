"use client";

import "@components/styles/chat.css";
import Button from "@components/Button";
import Title from "@components/Title";

const Chat = () => {
  return (
    <section id="chat" className="chat py-20 l lg:py-32 xl:py-40  mt-6">
      <div className="container mx-auto ">

        <Title myclassName="chat_title" value="AI Chat App for seamless collaboration"/>

        <div className="lg:grid lg:grid-cols-2">

        <div className="list_chats mt-8 ">
          <ul className="list_items flex flex-col justify-start align-items-center gap-20">
            <li className="item">
              <img src="/assets/check.svg" alt="" />
              <span>Seamless Integration</span>
            </li>
            <li className="item text-Para">
              With smart automation and top-notch security, it's the perfect
              solution for teams looking to work smarter.
            </li>

            <li className="item">
              <img src="/assets/check.svg" alt="" />

              <span>Smart Automation</span>
            </li>
            <li className="item">
              <img src="/assets/check.svg" alt="" />
              <span> Top-notch Security</span>
            </li>
            <li className="item">
              <Button myclassName="try" value="try it now " />
            </li>
            <li className="item text-Para mb-12">
              With smart automation and top-notch security, it's the perfect
              solution for teams looking to work smarter.
            </li>
          </ul>
        </div>

        <div className=" my-5 relative left-1/2 flex w-[35rem] aspect-square border border-n-6 -translate-x-1/2 scale:75 md:scale-100 rounded-full">
          <div className="flex w-80 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[8rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center  justify-center w-full h-full bg-n-8  rounded-full">
                <img
                  src="/assets/brainwave-symbol.svg"
                  width="48"
                  height="48"
                  alt="brainwave"
                />
              </div>
            </div>
          </div>
          <ul>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-0">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-0">
              <img className="m-auto" width="26" height="36" alt="Figma" src="/assets/collaboration/figma.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-45">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-45">
              <img className="m-auto" width="26" height="36" alt="Notion" src="/assets/collaboration/Notion.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-90">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-90">
              <img className="m-auto" width="26" height="36" alt="Discord" src="/assets/collaboration/Discord.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-135">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-135">
              <img className="m-auto" width="26" height="36" alt="Slack" src="/assets/collaboration/Slack.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-180">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-180">
              <img className="m-auto" width="26" height="36" alt="Figma" src="/assets/collaboration/Photoshop.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-225">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-225">
              <img className="m-auto" width="26" height="36" alt="Protopie" src="/assets/collaboration/Protopie.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-270">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-270">
              <img className="m-auto" width="26" height="36" alt="Framer" src="/assets/collaboration/Framer.png"></img>
              </div>
            </li>
            <li className=" absolute left-1/2 top-0 h-1/2 -ml-[2rem] origin-bottom rotate-315">
              <div className="relative -top-[1.6rem] flex w-[4.5rem] h-[4.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-315">
              <img className="m-auto" width="26" height="36" alt="Raindrop" src="/assets/collaboration/Raindrop.png"></img>
              </div>
            </li>
          </ul>
        </div>
        </div>

      </div>

    </section>
  );
};

export default Chat;
