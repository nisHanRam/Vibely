/* eslint-disable react/display-name */
import Title from "../shared/Title";
import Header from "./Header";
import { DUMMY_CHAT_LIST } from "../../constants";
import styles from "./AppLayout.module.css";
import ChatList from "../specific/ChatList";

const AppLayout = (WrappedComponent) => {
  return (props) => (
    <div className={styles["app-layout"]}>
      <Title />
      <Header />
      <div className={styles["main-content"]}>
        <div>
          <ChatList chats={DUMMY_CHAT_LIST} />
        </div>
        <div>
          <WrappedComponent {...props} />
        </div>
        <div>User Profile</div>
      </div>
    </div>
  );
};

export default AppLayout;
