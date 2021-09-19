import React from "react";
import style from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const allFeedbackNames = Object.keys(options);
  return (
    <div className={style.buttonListContainer}>
      <ul className={style.buttonList}>
        {allFeedbackNames.map((name) => (
          <li key={name} className={style.buttonItem}>
            <button
              className={style.button}
              type="button"
              onClick={() => onLeaveFeedback(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
