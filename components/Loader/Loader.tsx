import React from "react";
import styles from "./Loader.module.scss";
import Image from "next/image";
import { logo } from "@/utils/constants";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image src={logo} alt="logo" className={styles.logo} />
    </div>
  );
};

export default Loader;
