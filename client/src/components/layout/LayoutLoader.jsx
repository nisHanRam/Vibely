import styles from "./LayoutLoader.module.css";

const LayoutLoader = () => {
  return (
    <div className={`${styles.layout}`}>
      <div className={`${styles.header} ${styles.skeleton}`}></div>
      <div className={styles.main}>
        <div className={`${styles.left} ${styles.skeleton}`}></div>
        <div className={`${styles.center} ${styles.skeleton}`}></div>
        <div className={`${styles.right} ${styles.skeleton}`}></div>
      </div>
    </div>
  );
};

export default LayoutLoader;
