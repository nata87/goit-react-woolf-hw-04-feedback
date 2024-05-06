import styles from './feedbackOption.module.css';

const FeedbackOptions = ({ options, setFeedback }) => {
  return (
    <div className={styles.container}>
      {options.map(option => {
        return (
          <button
            className={styles.button}
            name={option}
            onClick={({ target }) => setFeedback(target.name)}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
