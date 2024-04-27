import LoginForm from "./LoginForm";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
