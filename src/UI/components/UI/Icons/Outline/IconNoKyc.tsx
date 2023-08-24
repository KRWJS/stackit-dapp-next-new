import { IconProps } from '../../../../interfaces/Icon/IconInterface';

const IconNoKyc = ({ height, width, strokeColor }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.83117 3.33984L5.88573 6.39441M18.1501 18.6588L15.0959 15.6045M12.0863 16.8074C11.5695 16.9054 11.0363 16.9567 10.491 16.9567C6.68032 16.9567 3.45457 14.4521 2.37012 10.9993C2.66534 10.0593 3.11926 9.18964 3.70047 8.42163M8.68529 9.19396C9.14732 8.73193 9.78561 8.44616 10.4906 8.44616C11.9007 8.44616 13.0438 9.58924 13.0438 10.9993C13.0438 11.7043 12.758 12.3426 12.296 12.8047M8.68529 9.19396L12.296 12.8047M8.68529 9.19396L5.88573 6.39441M12.296 12.8047L5.88573 6.39441M12.296 12.8047L15.0959 15.6045M5.88573 6.39441C7.21322 5.53857 8.79412 5.04195 10.491 5.04195C14.3017 5.04195 17.5275 7.54652 18.6119 10.9993C18.0103 12.9148 16.7497 14.5384 15.0959 15.6045"
        stroke={strokeColor}
        strokeWidth="1.27658"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconNoKyc;