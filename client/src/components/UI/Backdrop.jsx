import styles from "./Backdrop.module.css";

const Backdrop = ({ onClick, className, children }) => {
  return (
    <div onClick={onClick} className={`${styles.backdrop} ${className}`}>
      {children}
    </div>
  );
};
export default Backdrop;
