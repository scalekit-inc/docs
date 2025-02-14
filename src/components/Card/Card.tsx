import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './card.module.css';
import Link from '@docusaurus/Link';
import VideoModal from '../VideoModal/VideoModal';

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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Function to extract YouTube video ID
  const getYoutubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Check if URL is YouTube and get video ID
  const videoId = href ? getYoutubeVideoId(href) : null;

  const handleClick = (e: React.MouseEvent) => {
    if (videoId) {
      e.preventDefault();
      setIsVideoModalOpen(true);
    }
  };

  return (
    <>
      <div className={clsx(styles.container)} onClick={handleClick}>
        <div className={clsx(styles.header)}>
          {title && (
            <h5 className={clsx(styles.title)}>
              {icon && <span className={clsx(styles.icon)}>{icon}</span>}
              {title}
            </h5>
          )}
        </div>
        {description && (
          <p className={clsx(styles.description)}>{description}</p>
        )}
        <div className={clsx(styles.links)}>{children}</div>
      </div>

      {isVideoModalOpen && videoId && (
        <VideoModal
          videoId={videoId}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </>
  );
};

export default Card;
