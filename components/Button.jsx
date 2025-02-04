"use client";
import "@components/styles/button.css";
const Button = ({value , myClass}) => {
  return (
    <button className={`myButton ${myClass}`}>{value}</button>
)
}

export default Button