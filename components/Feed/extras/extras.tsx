import React from "react";
import styles from "@/styles/Feed.module.scss";
import Ad from "./ad";
import WhatsHappening from "./whatsHappening";

const Extras = () => {
  return (
    <div className={styles.extras}>
      <Ad />
      <WhatsHappening />
    </div>
  );
};

export default Extras;
