"use client";

const Fotter = () => {
  return (
    <section id="Fotter" className="Fotter p-4 mt-6 mb-4">
      <div className="container mx-auto md:grid md:grid-cols-2">
        <p class="text-n-4 text-center my-6 ml-auto md:mr-auto lg:block leading-[1.25rem] text-[1.5rem]">
          © 2025. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap justify-center items-center">
          <a
            href="#"
            target="_blank"
            class="flex items-center justify-center md:rounded-full  w-16 h-16 bg-n-7  transition-colors hover:bg-n-6"
          >
            <img src="/assets/socials/discord.svg" width={"16"} height={"16"} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            class="flex items-center justify-center  md:rounded-full w-16 h-16 bg-n-7  transition-colors hover:bg-n-6"
          >
            <img src="/assets/socials/twitter.svg "  width={"16"} height={"16"} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            class="flex items-center justify-center  md:rounded-full w-16 h-16 bg-n-7  transition-colors hover:bg-n-6"
          >
            <img src="/assets/socials/facebook.svg"  width={"16"} height={"16"} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            class="flex items-center justify-center  md:rounded-full w-16 h-16 bg-n-7  transition-colors hover:bg-n-6"
          >
            <img src="/assets/socials/instagram.svg"  width={"16"} height={"16"} alt="" />
          </a>
          <a
            href="#"
            target="_blank"
            class="flex items-center justify-center  md:rounded-full w-16 h-16 bg-n-7  transition-colors hover:bg-n-6"
          >
            <img src="/assets/socials/telegram.svg"  width={"16"} height={"16"} alt="" />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Fotter;
