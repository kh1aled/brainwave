"use client";
import "@components/styles/loading.css";
const Loading = ({ myClass }) => {
  return (
    <div className={`${myClass} loading_ai  flex justify-start gap-3 items-center bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-n-10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-base`}>
      <img src="assets/loading.png" alt="" />
      <span>Ai is generating</span>
    </div>
  );
};

export default Loading;
