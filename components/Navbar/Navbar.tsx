import React from "react";
import styles from "@/styles/Landing.module.scss";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo_div}>
        <Image src={logo} alt="twitter" />
        <p>twitter</p>
      </div>
      <div className={styles.auth_btns}>
        <Link href="/login" className={styles.login_btn}>
          Login
        </Link>
        <Link href="register" className={styles.signup_btn}>
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
