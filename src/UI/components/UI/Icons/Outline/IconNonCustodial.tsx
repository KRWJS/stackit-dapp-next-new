import { IconProps } from '../../../../interfaces/Icon/IconInterface';

const IconNonCustodial = ({ height, width, strokeColor }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99037 7.43282V8.38793M3.12503 10.2982H8.8557C9.3832 10.2982 9.81081 9.87053 9.81081 9.34304V6.47771C9.81081 5.95021 9.3832 5.52259 8.8557 5.52259H3.12503C2.59754 5.52259 2.16992 5.95021 2.16992 6.47771V9.34304C2.16992 9.87053 2.59754 10.2982 3.12503 10.2982ZM7.90059 5.52259V3.61237C7.90059 2.55738 7.04535 1.70215 5.99037 1.70215C4.93538 1.70215 4.08014 2.55738 4.08014 3.61237V5.52259H7.90059Z"
        stroke={strokeColor}
        strokeWidth="0.716334"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconNonCustodial;
