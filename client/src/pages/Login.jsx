import { useState } from "react";
import AnimatedCard from "../components/UI/AnimatedCard";
import styles from "./Login.module.css";
import UploadAvatar from "../components/UI/UploadAvatar";
import {
  checkPasswordValidity,
  checkUsernameValidity,
} from "../utils/validators";
import Button from "../components/UI/Button";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAvatarValid, setIsAvatarValid] = useState(true);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("In Login Handler");
  };

  const signupHandler = (event) => {
    event.preventDefault();
    console.log("In Login Handler");
  };

  const avatarChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file.size > 1 * 1024 * 1024) {
      setIsAvatarValid(false);
      return;
    }
    setAvatar(file);
    !isAvatarValid && setIsAvatarValid(true);
  };

  return (
    <div className={styles.login}>
      <AnimatedCard category="tall">
        <form onSubmit={isLogin ? loginHandler : signupHandler}>
          <div className={styles["form-controls"]}>
            {!isLogin && (
              <>
                <UploadAvatar
                  onAvatarChange={avatarChangeHandler}
                  avatar={avatar}
                />
                {!isAvatarValid && (
                  <p className={styles.error} style={{ textAlign: "center" }}>
                    Image must be less than 1MB.
                  </p>
                )}
              </>
            )}
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            )}
            {!isLogin && (
              <input
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                required
              />
            )}
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              {username.length > 0 && !checkUsernameValidity(username) && (
                <p className={styles.error}>
                  *Username must be 8 characters and should contain only
                  alphanumeric characters (0-9, a-z, A-Z).
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {password.length > 0 && !checkPasswordValidity(password) && (
                <p className={styles.error}>
                  *Password must be 8 characters and should contain all numeric,
                  lowercase, uppercase & special characters.
                </p>
              )}
            </div>
          </div>
          <div className={styles["form-actions"]}>
            <Button type="submit">{isLogin ? "Login" : "Signup"}</Button>
            <Button onClick={() => setIsLogin((prev) => !prev)}>
              {isLogin
                ? "Don't have Account? Create one."
                : "Already have an Account? Login."}
            </Button>
          </div>
        </form>
      </AnimatedCard>
    </div>
  );
};

export default Login;
