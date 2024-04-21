import { useState } from "react";

import Button from "../UI/Button";
import UploadAvatar from "../UI/UploadAvatar";

import styles from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("In Login Handler");
  };

  const signupHandler = (event) => {
    event.preventDefault();
    console.log("In Signup Handler");
  };

  return (
    <div className={styles.auth}>
      <div className={styles["form-container"]}>
        <form onSubmit={isLogin ? loginHandler : signupHandler}>
          <div className={styles["form-controls"]}>
            {!isLogin && <UploadAvatar />}
            {!isLogin && <input type="text" placeholder="Name" required autoComplete="off"/>}
            {!isLogin && <input type="text" placeholder="Bio" required />}
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
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
      </div>
    </div>
  );
};

export default Login;
