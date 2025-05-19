import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>

      {hasFeedback && (
        <button onClick={onReset} className={styles.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;