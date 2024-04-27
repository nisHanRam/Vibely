import styles from "./GlassCard.module.css";

const GlassCard = (WrappedComponent) => {
  return (props) => (
    <div className={styles.outer}>
      <WrappedComponent {...props} className={styles.inner} />
    </div>
  );
};

export default GlassCard;
