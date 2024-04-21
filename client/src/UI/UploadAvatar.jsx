import { IoPerson } from "react-icons/io5";

import styles from "./UploadAvatar.module.css";

const UploadAvatar = () => {
  return (
    <div className={styles.avatar}>
      <label htmlFor="profile-pic">
        <IoPerson className={styles["avatar-icon"]} />
      </label>
      <input type="file" accept="image/*" id="profile-pic" />
    </div>
  );
};

export default UploadAvatar;
