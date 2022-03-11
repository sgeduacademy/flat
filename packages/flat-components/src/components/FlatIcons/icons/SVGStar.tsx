import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGStar: React.FC<FlatIconProps> = ({ active, className = "", ...restProps }) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                className="flat-icon-stroke-color"
                d="m12 4 1.88 5.411 5.728.117-4.565 3.46 1.66 5.484L12 15.2l-4.702 3.272 1.659-5.483-4.565-3.461 5.727-.117L12 4Z"
                stroke="#5D6066"
                strokeLinejoin="round"
                strokeWidth="1.25"
            ></path>
        </svg>
    );
};

export default SVGStar;
