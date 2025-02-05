"use client";
import Hero from "@components/design/Hero";
import Features from "@components/design/Features";
import Chat from "@components/design/Chat";
import How from "@components/design/How_to_use";
import Price from "@components/design/Price";
import Work from "@components/design/Work";
import Fotter from "@components/design/Fotter";

const page = () => {
  return (
    <div className='w-full'>
        <Hero/>
        <Features/>
        <Chat/>
        <How/>
        <Price/>
        <Work/>
        <Fotter/>
    </div>
  )
}

export default page