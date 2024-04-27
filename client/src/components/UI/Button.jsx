import styles from "./Button.module.css";

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

export default Button;
