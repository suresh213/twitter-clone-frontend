import { getToken, localStorageMiddleware } from "@/middleware/localStorageMiddleware";
import authService from "@/services/auth";
import { agent } from "@/services/request";
import styles from "@/styles/Register.module.scss";
import { logo } from "@/utils/constants";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (getToken()) router.push("feed");
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attribute: string
  ) => {
    setUser((prevUser) => ({
      ...prevUser,
      [attribute]: event.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authService.register(user).then((res) => {
        localStorageMiddleware(res.data.data);
        router.push("/feed");
      });
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>SignUp | Twitter</title>
        <meta name="description" content="Sign Up to twitter" />
      </Head>
      <main className={styles.register_container}>
        <div className={styles.register__content}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.register__auth}>
          <div className={styles.header}>Sign up to twitter</div>
          <form className={styles.register__form} onSubmit={handleSubmit}>
            <div className={styles.register__input}>
              <input
                type="text"
                className={styles.input}
                name="Name"
                placeholder="Name"
                autoComplete="false"
                required
                value={user.name}
                onChange={(event) => handleChange(event, "name")}
              />
            </div>
            <div className={styles.register__input}>
              <input
                type="text"
                className={styles.input}
                name="email"
                autoComplete="false"
                required
                placeholder="Email"
                value={user.email}
                onChange={(event) => handleChange(event, "email")}
              />
            </div>
            <div className={styles.register__input}>
              <input
                type="password"
                className={styles.input}
                name="password"
                autoComplete="false"
                required
                placeholder="Password"
                value={user.password}
                onChange={(event) => handleChange(event, "password")}
              />
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.register__button}>
                Sign Up
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
