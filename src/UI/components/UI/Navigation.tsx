import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavigationProps, NavigationLinkProps } from '../../interfaces/General/GeneralInterface';

const Navigation = ({
  items,
  direction = 'row',
  gap = 'u-gap-24',
  icon = false,
}: NavigationProps) => {
  const router = useRouter();
  const activeRoute = router.pathname;

  const renderActiveRouteClass = (route: string) => (activeRoute === route ? 'is-active' : '');
  const renderLabelOrIcon = (id: string) =>
    icon ? (
      <picture>
        <img src={`/images/social/icon-${id.toLocaleLowerCase()}.svg`} alt={`${id} logo`} />
      </picture>
    ) : (
      id
    );

  return (
    <nav className={`nav nav--${direction} ${gap}`}>
      {items.map((item: NavigationLinkProps) => (
        <Link
          className={renderActiveRouteClass(item.route)}
          href={item.route}
          key={item.label}
          title={`Click to visit ${item.label.toLowerCase()}`}
        >
          {renderLabelOrIcon(item.label)}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
