import { IconProps } from '../../../../interfaces/Icon/IconInterface';

const IconPause = ({ height, width, strokeColor }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 15.854L6.75 3.479M11.8125 15.854L11.8125 3.479"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPause;
