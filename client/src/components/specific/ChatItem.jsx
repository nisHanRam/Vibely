import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import AnimatedCard from "../UI/AnimatedCard";
import styles from "./ChatItem.module.css";

const ChatItem = ({
  avatar = [],
  name,
  id,
  groupChat = false,
  sameSender = false,
  isOnline = true,
  lastMessage,
  newMessage = 1,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <li className={styles["chat-item"]}>
      <AnimatedCard category="wide">
        <Link
          to={`/chat/${id}`}
          className={styles["chat-item__link"]}
          onContextMenu={(event) => handleDeleteChatOpen(event, id, groupChat)}
        >
          <div>
            <img src={avatar} />
          </div>
          <div>
            <div className={styles["chat-item__status"]}>
              {isOnline && (
                <span
                  className="badge"
                  style={{ background: "yellowgreen" }}
                ></span>
              )}
              <h3>{name}</h3>
              {newMessage && <span className="badge">{0}</span>}
            </div>
            <p>Will show last message here.</p>
          </div>
        </Link>
      </AnimatedCard>
    </li>
  );
};

ChatItem.propTypes = {
  avatar: PropTypes.string,
  // avatar: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.number,
  groupChat: PropTypes.bool,
  sameSender: PropTypes.bool,
  isOnline: PropTypes.bool,
  lastMessage: PropTypes.string,
  newMessage: PropTypes.string,
  index: PropTypes.number,
  handleDeleteChatOpen: PropTypes.func,
  className: PropTypes.string,
};

export default memo(ChatItem);
// How to use Memo here
