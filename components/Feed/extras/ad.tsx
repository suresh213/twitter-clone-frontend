import styles from "@/styles/Feed.module.scss";
import Image from "next/image";
import dahlia_logo from "@/assets/dahlia_logo.png";

const Ad = () => {
  return (
    <div className={styles.ad_container}>
      <p className={styles.ad__inform}>Promotion</p>
      <div className={styles.ad_title}>
        <Image src={dahlia_logo} alt="dahlia_logo" width={100} />
        <p>Dahlia</p>
      </div>
      <p className={styles.ad_description}>
        Hyper-personalized intimacy and matchmaking platform
      </p>
      <button className={styles.ad_action}>Explore now!</button>
    </div>
  );
};

export default Ad;
