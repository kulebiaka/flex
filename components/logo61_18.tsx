import React from "react";

const FlexLogo = ({
  height = 18,
  width = 61,
  color = "white",
}: {
  height?: number;
  width?: number;
  color?: "white" | "black";
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 61 18"
      fill="none"
    >
      <g clipPath="url(#clip0_36_150)">
        <path
          d="M3.70653 4.27791V7.70828H10.1109V11.1866H3.70653V17.5916H0V0.799561H10.5331V4.27791H3.70653Z"
          fill={color}
        />
        <path
          d="M23.6464 14.1132V17.5916H13.1133V0.799561H16.8432V14.1132H23.6464Z"
          fill={color}
        />
        <path
          d="M29.4642 4.27791V7.20451H36.1032V10.5629H29.4642V14.1132H36.5255V17.5916H25.8047V0.799561H36.5255V4.27791H29.4642Z"
          fill={color}
        />
        <path
          d="M60.7711 0.799561V5.713L54.6726 8.39773L52.735 9.15755L54.7043 9.94265L60.771 12.6781V17.5916L49.6223 11.741L38.5371 17.4142V12.6021L43.9685 10.1706L46.3507 9.20812L44.0956 8.29641L38.5371 5.76374V0.95146L49.5906 6.62488L60.7711 0.799561Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_36_150">
          <rect
            width="60.7711"
            height="16.792"
            fill={color}
            transform="translate(0 0.799561)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FlexLogo;
