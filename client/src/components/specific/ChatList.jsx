import ChatItem from "./ChatItem";
import styles from "./ChatList.module.css";

const ChatList = ({
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <ul className={styles["chat-list"]}>
      {chats.map((item) => {
        const { avatar, name, id, groupChat, members } = item;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === id
        );

        const isOnline = members.some((member) => onlineUsers.includes(member));

        return (
          <ChatItem
            key={item.id}
            avatar={avatar}
            name={item.name}
            lastMessage={item.lastMessage}
          />
        );
      })}
    </ul>
  );
};

export default ChatList;
