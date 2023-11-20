import React from 'react';

export const FeedbackOptions = ({ options, leaveVote }) => {
  const optionBtn = options.map(option => (
    <button
      key={option.key}
      type="button"
      onClick={() => leaveVote(`${option}`)}
    >
      {option}
    </button>
  ));
  return <ul>{optionBtn}</ul>;
};
