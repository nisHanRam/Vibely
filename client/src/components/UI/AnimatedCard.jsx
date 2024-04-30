import PropTypes from "prop-types";
import styles from "./AnimatedCard.module.css";

const AnimatedCard = ({ children, category }) => {
  return (
    <div className={`${styles.card} ${styles[`${category}-card`]}`}>
      {children}
    </div>
  );
};

AnimatedCard.propTypes = {
  children: PropTypes.object,
  category: PropTypes.string,
};

export default AnimatedCard;
