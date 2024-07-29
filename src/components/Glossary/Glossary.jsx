import React from 'react';
import styles from './Glossary.module.css';

const glossary_items = {
  Workspace: 'Represents the account of Scalekit customer.',
  Application: 'A product or product-line that you offer to your customers',
  Environment:
    'This is your application’s deployment environment. Scalekit maps to your deployment policies and your application can have multiple environments such as development, test, staging, and production. Each environment on Scalekit will have its own configuration, API settings, and authentication policies. Each environment is strictly separated from each other, thus ensuring protection and isolation of data and configuration.',
  'Team member':
    'A user in the account that uses, evaluates, and implements Scalekit platform. These could be your organization’s full time employees or consultants. Eg: product managers, developers, customer success managers from your team.',
  Dashboard:
    'The dashboard of Scalekit that your team members would use to configure and integrate with your application.',
  Organization:
    'This is your customer’s organization. Your application’s users would belong to this organization.',
  'Admin Portal':
    "The user interface (UI) utilized by your customers' IT administrators to configure Single Sign-On (SSO) connections and settings is fully managed and hosted by Scalekit. This UI can be presented either as a standalone portal or as an embedded feature within your application's admin settings section.",
  User: 'Users of your application that belong to your customers’ organizations. Includes users, admins, IT admins who use and implement your application.',
  Connection:
    'Represents the unique integration between your application and your customer’s organization. Examples: Connection 1 is Okta’s identity provider integration with your customer, Foocorp. Connection 2 is Microsoft Azure’s integration with another of your customer, Barcorp.',
};

import { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';

export const TooltippedGlossary = ({ glossary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right-end',
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift(),
    ],
  });

  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
  const role = useRole(context, { role: 'tooltip' });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <span
        ref={refs.setReference}
        {...getReferenceProps()}
        className={styles.glossary}
      >
        {glossary}
      </span>
      <FloatingPortal>
        {isOpen && (
          <div
            className={styles.tooltip}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {glossary_items[glossary]}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export const GlossaryListing = () => (
  <div>
    {Object.keys(glossary_items).map((item, index) => (
      <Glossary
        key={index}
        name={item}
        description={glossary_items[item]}
      ></Glossary>
    ))}
  </div>
);

const Glossary = ({ name, description }) => (
  <p>
    <strong>{name}</strong>
    <br />
    {description}
  </p>
);

export default Glossary;
