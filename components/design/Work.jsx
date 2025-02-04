"use client";

import Title from "@components/Title";
import Tag from "@components/Tag";
import Button from "@components/Button";

const Work = () => {
  return (
    <section id="work" className="work p-4 mt-6">
      <div className="container">
        <Tag myClass={"price_tag"} value={"Get started with Brainwave"} />

        <Title myclassName="work_title" value="What we’re working on" />

        <div className="realtive mt-20">
          <div className="relative z-1 h-[54rem] bg-conic-gradient mb-5 p-[0.0625rem] rounded-[2.4375rem] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative w-full h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div class="absolute top-0 left-0 max-w-full">
                <img
                  class="w-full"
                  src="/assets/grid.png"
                  width="550"
                  height="550"
                  alt="Grid"
                />
              </div>
              <div className="relative">
                <div className="head flex justify-between items-center">
                  <Tag myClass={"work_tag"} value={"MAY 2024"} />
                  <div className="flex items-center px-8 py-1 bg-n-1 rounded text-n-8">
                    <img
                      src="/assets/check-02.svg"
                      alt="DONE"
                      width={"16"}
                      height={"16"}
                    />
                    <span className="text-[0.9rem]">DONE</span>
                  </div>
                </div>
                <div class="mb-10 -my-10 -mx-15">
                  <img
                    class="w-full"
                    src="/assets/roadmap/image-1.png"
                    width="628"
                    height="426"
                    alt="Voice recognition"
                  />
                </div>
                <h4 class="h4 mb-4">Voice recognition</h4>
                <p class="body-3 text-n-4">
                  Enable the chatbot to understand and respond to voice
                  commands, making it easier for users to interact with the app
                  hands-free.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-1 h-[51rem] border border-n-6 mb-5 p-[0.0625rem] rounded-[2.4375rem] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative w-full h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div class="absolute top-0 left-0 max-w-full">
                <img
                  class="w-full"
                  src="/assets/grid.png"
                  width="550"
                  height="550"
                  alt="Grid"
                />
              </div>
              <div className="relative">
                <div className="head flex justify-between items-center">
                  <Tag myClass={"work_tag"} value={"MAY 2023"} />
                  <div className="flex items-center px-8 py-1 bg-n-1 rounded text-n-8">
                    <img
                      src="/assets/loading-01.svg"
                      alt="DONE"
                      width={"16"}
                      height={"16"}
                    />
                    <span className="text-[0.9rem]">In progress</span>
                  </div>
                </div>
                <div class="mb-10 -my-10 -mx-15">
                  <img
                    class="w-full"
                    src="/assets/roadmap/image-2.png"
                    width="628"
                    height="426"
                    alt="Voice recognition"
                  />
                </div>
                <h4 class="h4 mb-4">Gamification</h4>
                <p class="body-3 text-n-4">
                  Add game-like elements, such as badges or leaderboards, to
                  incentivize users to engage with the chatbot more frequently.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-1 h-[51rem] border border-n-6  mb-5 p-[0.0625rem] rounded-[2.4375rem] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative w-full h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div class="absolute top-0 left-0 max-w-full">
                <img
                  class="w-full"
                  src="/assets/grid.png"
                  width="550"
                  height="550"
                  alt="Grid"
                />
              </div>
              <div className="relative">
                <div className="head flex justify-between items-center">
                  <Tag myClass={"work_tag"} value={"MAY 2024"} />
                  <div className="flex items-center px-8 py-1 bg-n-1 rounded text-n-8">
                    <img
                      src="/assets/check-02.svg"
                      alt="DONE"
                      width={"16"}
                      height={"16"}
                    />
                    <span className="text-[0.9rem]">DONE</span>
                  </div>
                </div>
                <div class="mb-10 -my-10 -mx-15">
                  <img
                    class="w-full"
                    src="/assets/roadmap/image-2.png"
                    width="628"
                    height="426"
                    alt="Voice recognition"
                  />
                </div>
                <h4 class="h4 mb-4">Chatbot customization</h4>
                <p class="body-3 text-n-4">
                  Allow users to customize the chatbot's appearance and
                  behavior, making it more engaging and fun to interact with.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-1 h-[51rem] border border-n-6  mb-5 p-[0.0625rem] rounded-[2.4375rem] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative w-full h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div class="absolute top-0 left-0 max-w-full">
                <img
                  class="w-full"
                  src="/assets/grid.png"
                  width="550"
                  height="550"
                  alt="Grid"
                />
              </div>
              <div className="relative">
                <div className="head flex justify-between items-center">
                  <Tag myClass={"work_tag"} value={"MAY 2024"} />
                  <div className="flex items-center px-8 py-1 bg-n-1 rounded text-n-8">
                    <img
                      src="/assets/check-02.svg"
                      alt="DONE"
                      width={"16"}
                      height={"16"}
                    />
                    <span className="text-[0.9rem]">DONE</span>
                  </div>
                </div>
                <div class="mb-10 -my-10 -mx-15">
                  <img
                    class="w-full"
                    src="/assets/roadmap/image-2.png"
                    width="628"
                    height="426"
                    alt="Voice recognition"
                  />
                </div>
                <h4 class="h4 mb-4">Chatbot customization</h4>
                <p class="body-3 text-n-4">
                  Allow users to customize the chatbot's appearance and
                  behavior, making it more engaging and fun to interact with.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-1 h-[51rem] border border-n-6  mb-5 p-[0.0625rem] rounded-[2.4375rem] overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative w-full h-full p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div class="absolute top-0 left-0 max-w-full">
                <img
                  class="w-full"
                  src="/assets/grid.png"
                  width="550"
                  height="550"
                  alt="Grid"
                />
              </div>
              <div className="relative">
                <div className="head flex justify-between items-center">
                  <Tag myClass={"work_tag"} value={"MAY 2024"} />
                  <div className="flex items-center px-8 py-1 bg-n-1 rounded text-n-8">
                    <img
                      src="/assets/loading-01.svg"
                      alt="DONE"
                      width={"16"}
                      height={"16"}
                    />
                    <span className="text-[0.9rem]">IN PROGRESS</span>
                  </div>
                </div>
                <div class="mb-10 -my-10 -mx-15">
                  <img
                    class="w-full"
                    src="/assets/roadmap/image-4.png"
                    width="628"
                    height="426"
                    alt="Voice recognition"
                  />
                </div>
                <h4 class="h4 mb-4">Integration with APIs</h4>
                <p class="body-3 text-n-4">
                  Allow the chatbot to access external data sources, such as
                  weather APIs or news APIs, to provide more relevant
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button myClass={"roadmap_btn mt-20 m-auto"} value={"OUR ROADMAP"}/>
      </div>
    </section>
  );
};

export default Work;
