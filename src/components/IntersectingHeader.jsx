import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { useHeaderContext } from '@site/src/components/SidebarWrapper';

const activeLinkClass = 'menu__link--active';
let currentActiveLink,
  sidebarItems = [];

export default function IntersectingHeader({ children, id }) {
  const { addItem } = useHeaderContext();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          const newActiveLink = document.querySelector(
            `a[href="#${entry.target.id}"]`
          );
          if (newActiveLink) {
            const oldActiveLink = document.querySelector(
              'a.table-of-contents__link--active'
            );
            if (oldActiveLink) {
              oldActiveLink.classList.remove('table-of-contents__link--active');
            }
            newActiveLink.classList.add('table-of-contents__link--active');
          }
        }
      },
      { threshold: 1.0 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  useEffect(() => {
    addItem({ id, children });
  }, []);

  return (
    <div
      id={id}
      className={`intersecting-header ${isIntersecting ? 'intersecting' : ''}`}
    >
      {children}
    </div>
  );
}
