import Title from "../shared/Title";
import Header from "./Header";

import styles from "./AppLayout.module.css";

const AppLayout = (WrappedComponent) => {
  return (props) => (
    <div className={styles["app-layout"]}>
      <Title />
      <Header />
      <div className={styles["main-content"]}>
        <div className={styles["chat-list"]}>Chat List</div>
        <div className={styles["chat"]}>
          <WrappedComponent {...props} />
        </div>
        <div className={styles["user-profile"]}>User Profile</div>
      </div>
    </div>
  );
};

export default AppLayout;
