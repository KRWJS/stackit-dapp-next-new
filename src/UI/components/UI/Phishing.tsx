import Link from 'next/link';
import { PhishingProps } from '../../interfaces/UI/UiInterface';

import Button from './Button';

import IconClose from './Icons/Solid/IconClose';

const Phishing = ({ onClick, link, margin = 'u-m-0' }: PhishingProps) => {
  return (
    <div className={`phishing ${margin}`}>
      <div className="phishing__container">
        <p>
          <span>Phishing Warning:</span> Make sure you&apos;re visiting{' '}
          <Link href={link} title="Click to go home">
            {link}
          </Link>{' '}
          - Bookmark the URL.
        </p>
        <Button color="close" title="Click to hide notification" onClick={onClick}>
          <IconClose height={12} width={12} fillColor="black" />
        </Button>
      </div>
    </div>
  );
};

export default Phishing;
