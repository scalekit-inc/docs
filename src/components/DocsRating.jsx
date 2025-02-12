import React, { useRef, useState, useEffect } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { IoHelpBuoyOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { PostHogProvider, usePostHog } from 'posthog-js/react';
import posthog from 'posthog-js';

const options = {
  api_host: 'https://us.i.posthog.com',
  autocapture: false,
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
  },
  bootstrap: {
    distinctID: 'anonymous',
    isIdentifiedID: false,
  },
};

const DocsRating = ({ label }) => {
  const [haveVoted, setHaveVoted] = useState(false);
  const [showTextFeedback, setShowTextFeedback] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    return () => {
      // Cleanup PostHog on unmount
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.shutdown();
      }
    };
  }, []);

  const giveFeedback = (value) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture('docs_feedback', { label: label, liked: value });
    }
    if (value == 1) {
      setHaveVoted(true);
    } else {
      setShowTextFeedback(true);
    }
  };

  const giveFullFeedback = (value) => {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture('docs_feedback_text', { label: label, comments: value });
    }
    setHaveVoted(true);
    setShowTextFeedback(false);
  };

  return (
    <div className="docsRating">
      {haveVoted ? (
        'We appreciate you taking the time to provide feedback. Your submission has been recorded.'
      ) : (
        <div>
          Is this page helpful?
          <a
            className="button button--secondary button--outline btn-outline"
            onClick={() => giveFeedback(1)}
          >
            <FaRegThumbsUp /> Yes
          </a>
          <a
            className="button button--secondary button--outline btn-outline"
            onClick={() => giveFeedback(0)}
          >
            <FaRegThumbsDown /> No
          </a>
          <TextFeedbackComponent
            className={!showTextFeedback ? 'hidden' : 'shown'}
            onFeedback={(feedback) => giveFullFeedback(feedback)}
          />
        </div>
      )}
    </div>
  );
};

const TextFeedbackComponent = ({ className, onFeedback }) => {
  const ref = useRef();

  return (
    <div className={className + ' feedbackContainer '}>
      <textarea
        ref={ref}
        rows="3"
        placeholder="Sorry to hear that. How can we help you?"
      />
      <a
        className="button button--secondary button--outline"
        onClick={() =>
          ref.current && ref.current.value && onFeedback(ref.current.value)
        }
      >
        Send Feedback
      </a>
    </div>
  );
};

// Only initialize PostHog in browser environment
const isClient = typeof window !== 'undefined';
const PostHogWrapper = ({ children }) => {
  if (!isClient) return children;

  return (
    <PostHogProvider
      apiKey="phc_85pLP8gwYvRCQdxgLQP24iqXHPRGaLgEw4S4dgZHJZ"
      options={options}
    >
      {children}
    </PostHogProvider>
  );
};

const ScalekitFooterComponent = ({
  seekFeedback = true,
  className = 'feedbackFooter',
}) => {
  return (
    <PostHogWrapper>
      <div className={className}>
        <hr />
        {seekFeedback ? <DocsRating /> : null}
        <div className="footerLink">
          <IoHelpBuoyOutline />
          Need help? <a href="mailto:support@scalekit.com">Contact Support</a>
        </div>
        <div className="footerLink">
          <IoHelpCircleOutline />
          Questions? <a href="mailto:hi@scalekit.com">Contact Us</a>
        </div>
      </div>
    </PostHogWrapper>
  );
};

export default ScalekitFooterComponent;
