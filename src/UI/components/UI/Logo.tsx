import Link from 'next/link';
import { LogoProps } from '../../interfaces/UI/UiInterface';

const Logo = ({ logo, margin }: LogoProps) => {
  return (
    <div className={`logo ${margin ? `${margin}` : ''}`}>
      <Link href="/" title="Click to go home">
        {logo}
      </Link>
    </div>
  );
};

export default Logo;
