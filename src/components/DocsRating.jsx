import React, { useRef, useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { IoHelpBuoyOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { PostHogProvider, usePostHog } from 'posthog-js/react';
const options = {
  api_host: 'https://us.i.posthog.com',
};

const DocsRating = ({ label }) => {
  const [haveVoted, setHaveVoted] = useState(false);
  const [showTextFeedback, setShowTextFeedback] = useState(false);
  const posthog = usePostHog();
  const giveFeedback = (value) => {
    posthog?.capture('docs_feedback', { label: label, liked: value });
    if (value == 1) {
      setHaveVoted(true);
    } else {
      setShowTextFeedback(true);
    }
  };
  const giveFullFeedback = (value) => {
    posthog?.capture('docs_feedback_text', { label: label, comments: value });
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

const ScalekitFooterComponent = ({
  seekFeedback = true,
  className = 'feedbackFooter',
}) => {
  return (
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
  );
};

export default ScalekitFooterComponent;
