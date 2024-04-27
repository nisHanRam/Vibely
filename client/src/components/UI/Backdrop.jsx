import PropTypes from "prop-types";

import styles from "./Backdrop.module.css";

const Backdrop = ({ onClick, className, children }) => {
  return (
    <div onClick={onClick} className={`${styles.backdrop} ${className}`}>
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Backdrop;
