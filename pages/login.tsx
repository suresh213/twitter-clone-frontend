import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Login.module.scss";
import { logo } from "@/utils/constants";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Twitter</title>
        <meta name="description" content="Login to twitter" />
      </Head>
      <main className={styles.login_container}>
        <div className={styles.login__content}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.login__auth}>
          <div className={styles.header}>Sign in to twitter</div>
          <form className={styles.login__form}>
            <div className={styles.login__input}>
              <input
                type="text"
                className={styles.username__input}
                name="username"
                placeholder="Username or mobile"
                autoComplete="false"
                required
              />
            </div>
            <div className={styles.login__input}>
              <input
                type="password"
                className={styles.password__input}
                name="password"
                autoComplete="false"
                required
                placeholder="Password"
              />
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.login__button}>
                Login
              </button>
            </div>

            <div className={styles.divider}>
              <div className={styles.line}></div>
              <div className={styles.text}>or</div>
              <div className={styles.line}></div>
            </div>
            <button type="button" className={styles.google_button}>
              <Image
                className={styles.google_icon}
                src={
                  "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                }
                width="100"
                height="100"
                alt="G"
              />
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
