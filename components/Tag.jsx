"use client";
const Tag = ({ value, myClass }) => {
  return (
    <div
      className={` ${myClass} tagline flex items-center mb-4 md:justify-center`}
    >
      <svg
        width="5"
        height="14"
        viewBox="0 0 5 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 0.822266H1V12.8223H5" stroke="url(#brackets-left)"></path>
        <defs>
          <linearGradient
            id="brackets-left"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#89F9E8"></stop>
            <stop offset="100%" stopColor="#FACB7B"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-3 text-n-3 text-[1.5rem] sm:text-[1.1rem]">{value}</div>
      <svg
        width="5"
        height="14"
        viewBox="0 0 5 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08"
          stroke="url(#brackets-right)"
        ></path>
        <defs>
          <linearGradient
            id="brackets-right"
            x1="14.635%"
            x2="14.635%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#9099FC"></stop>
            <stop offset="100%" stopColor="#D87CEE"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Tag;
