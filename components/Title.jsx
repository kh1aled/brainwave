"use client";
import "@components/styles/title.css";
const Button = ({ value, myClass }) => {
  return (
    <div className={`${myClass} title`}>
      <h1 className="h1">{value}</h1>
    </div>
  );
};

export default Button;
