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
  iconImage?: string; // New prop for image-based icons
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
  iconImage, // Add the new prop
  children,
  disableCardClick,
}: PropType) => {
  return (
    <CardContentWrapper href={href} disableCardClick={disableCardClick}>
      <div className={clsx(styles.header)}>
        {iconImage ? (
          <div className={clsx(styles.icon)}>
            <img src={iconImage} alt={title || 'card icon'} className={styles.iconImage} />
          </div>
        ) : icon ? (
          <div className={clsx(styles.icon)}>{icon}</div>
        ) : null}
        {title && <h5 className={clsx(styles.title)}>{title}</h5>}
      </div>
      {description && <p className={clsx(styles.description)}>{description}</p>}
      <div className={clsx(styles.links)}>{children}</div>
    </CardContentWrapper>
  );
};

export default Card;
