import React from 'react';
import Link from '@docusaurus/Link';

export function SimpleCode({ children, className = '' }) {
  return <code className={className + ' simple_code'}>{children}</code>;
}

export function CardTileWithImage({
  url,
  imageSrc,
  title,
  description,
  comingSoon,
}) {
  const isIntegrationsPage = url?.startsWith('/integrations/');
  const imageStyle = isIntegrationsPage ? { pointerEvents: 'none' } : undefined;

  const cardContent = (
    <h3>
      {imageSrc && (
        <img alt={title} src={imageSrc} style={imageStyle} loading="lazy" />
      )}
      <p>{title}</p>
    </h3>
  );

  return (
    <article className="col col--4 margin-bottom--lg">
      {comingSoon ? (
        <div className="card padding--lg cardContainer">
          {cardContent}
          <span>Coming Soon</span>
        </div>
      ) : (
        <Link className="card padding--lg cardContainer" to={url}>
          {cardContent}
          <p>{description}</p>
        </Link>
      )}
    </article>
  );
}

export default function Subtitle({ children }) {
  return <div className="subtitle"> {children} </div>;
}
