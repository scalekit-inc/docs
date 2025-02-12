import React from 'react';
import clsx from 'clsx';
import styles from './card.module.css';
import Link from '@docusaurus/Link';

export type CardType = {
  href?: string;
  title?: string;
  description?: string;
  linkText?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disableCardClick?: boolean; // New prop to disable card click
};

type PropType = CardType;

const CardContentWrapper = ({
  href,
  children,
  disableCardClick,
}: Partial<Pick<PropType, 'href' | 'disableCardClick'>> & {
  children: React.ReactNode;
}) => {
  if (href && !disableCardClick)
    return (
      <Link to={href} className={clsx(styles.container)}>
        <>{children}</>
      </Link>
    );

  return <div className={clsx(styles.container)}>{children}</div>;
};

const Card = ({
  href,
  title,
  description,
  linkText,
  icon,
  children,
  disableCardClick,
}: PropType) => {
  return (
    <CardContentWrapper href={href} disableCardClick={disableCardClick}>
      <div className={clsx(styles.header)}>
        {title && (
          <h5 className={clsx(styles.title)}>
            {icon && <span className={clsx(styles.icon)}>{icon}</span>}
            {title}
          </h5>
        )}
      </div>
      {description && <p className={clsx(styles.description)}>{description}</p>}
      <div className={clsx(styles.links)}>{children}</div>
    </CardContentWrapper>
  );
};

export default Card;
