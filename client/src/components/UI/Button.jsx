import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ className, type = "button", onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
