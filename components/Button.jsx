"use client";
import "@components/styles/button.css";
const Button = ({ value, myClass }) => {
  return (
    // <button className={`myButton clipped_3 bg-conic-gradient p-[0.1rem] ${myClass}`}>
    //   <span className="clipped_3 w-full h-full bg-n-9" >{value}</span>
    // </button>
    <button
      type="button"
      className={`${myClass}  clipped_3 items-center hover:text-bink myTransitoin rounded-xl justify-center bg-conic-gradient p-1  text-white closed`}
    >
      <div className="w-full px-[2rem] py-[1rem]  clipped_3 h-full flex justify-center rounded-xl  items-center flex-col bg-n-8">
        {value}
      </div>
    </button>
  );
};

export default Button;
