import { IconProps } from '../../../../interfaces/Icon/IconInterface';

const IconClose = ({ height, width, fillColor }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_86_118)">
        <path
          d="M23.2248 4.14413C24.1564 3.21245 24.1564 1.6994 23.2248 0.767728C22.2931 -0.16395 20.78 -0.16395 19.8484 0.767728L11.9999 8.62363L4.144 0.775181C3.21233 -0.156496 1.69928 -0.156496 0.767605 0.775181C-0.164072 1.70686 -0.164072 3.2199 0.767605 4.15158L8.62351 12L0.775059 19.8559C-0.156618 20.7876 -0.156618 22.3006 0.775059 23.2323C1.70674 24.164 3.21978 24.164 4.15146 23.2323L11.9999 15.3764L19.8558 23.2249C20.7875 24.1565 22.3005 24.1565 23.2322 23.2249C24.1639 22.2932 24.1639 20.7802 23.2322 19.8485L15.3763 12L23.2248 4.14413Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_118">
          <rect width="24" height="24" fill={fillColor} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconClose;
