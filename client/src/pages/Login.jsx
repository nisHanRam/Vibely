import { useState } from "react";
import styles from "./Login.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

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
      <Card>
        <form onSubmit={isLogin ? loginHandler : signupHandler}>
          <div className={styles["form-controls"]}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles["form-actions"]}>
            <Button type="submit">{isLogin ? "Login" : "Signup"}</Button>
            <Button onClick={() => setIsLogin(!isLogin)}>
              {isLogin
                ? "Don't have Account? Create one."
                : "Already have an Account? Login."}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
