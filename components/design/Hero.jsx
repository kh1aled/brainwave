"use client";
import Loading from "@components/LoadingAi";
import "@components/styles/hero.css"
const Hero = () => {
  return (
    <section className='hero text-center myImage'>
        <div className="container">
      <div className="circle c1"></div>
            <h1 className='h1 mb-6'>Explore the <br/> Possibilities <br/> of AI Chatting with <br/> <span className="inline-block relative">Brainwave <img width={"624"} height={"28"} className="absolute top-full left-0 w-full xl:-mt-2" src="/assets/hero/curve.png" /></span></h1>
            <p className='p body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <a href="" className="started_Btn">
                get started
            </a>
            <div className="img_container relative max-w-[33rem] mx-auto md:max-w-5xl xl:mb-24">

            {/* <img src="/assets/hero/robot.jpg" className="absloute img_bg" alt="" /> */}
            <div className="relative z-1 p-0.5 overflow-hidden rounded-2xl  bg-conic-gradient">
                <div className="robot_image w-full ">
                <div className="top_banner w-full absolute" ></div>
                  <img src="/assets/hero/robot.jpg" alt="" />
                  {/* <div className="loading_ai absolute flex justify-start items-center gap-3">
                    <img src="assets/loading.png" alt="" />
                    <span>Ai is generating</span>
                  </div> */}

                  <Loading myClass={"hero_loading"}/>
                  
                </div>
                <div className="bottom_div relative w-full ">

                <div className="bottom_1"></div>
                <div className="bottom_2"></div>
                
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero