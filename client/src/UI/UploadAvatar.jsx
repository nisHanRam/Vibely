import styles from "./UploadAvatar.module.css";
import avatarIcon from "../../src/assets/avatar.png";

const UploadAvatar = ({ onAvatarChange, avatar }) => {
  return (
    <div className={styles.avatar}>
      <label htmlFor="profile-pic">
        <img
          src={avatar ? URL.createObjectURL(avatar) : avatarIcon}
          height="100px"
        />
      </label>
      <input
        type="file"
        accept="image/*"
        id="profile-pic"
        onChange={onAvatarChange}
      />
    </div>
  );
};

export default UploadAvatar;
