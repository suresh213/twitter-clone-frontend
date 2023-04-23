import styles from "@/styles/Feed.module.scss";
import Image from "next/image";

const WhatsHappening = () => {
  return (
    <div className={styles.whats_happening_container}>
      <h2>{`What's Happening`}</h2>
      <div className={styles.trending}>
        <p className={styles.head}>Trending in India</p>
        <p className={styles.hashtag}>#ipl_trophy</p>
        <p className={styles.tweets}>13000 tweets</p>
      </div>
      <div className={styles.divider}></div>
      <ul className={styles["tweet-list"]}>
        <li className={styles.tweet}>
          <Image
            width={100}
            height={100}
            src="https://bit.ly/code-beast"
            alt="User profile picture"
            className={styles.tweet__img}
          />
          <div className={styles["tweet-content"]}>
            <p className={styles["tweet-username"]}>John doe</p>
            <p className={styles["tweet-text"]}>
              What an extraordinary innings from CSK!!
            </p>
            <p className={styles["tweet-time"]}>10m ago</p>
          </div>
        </li>
        <li className={styles.tweet}>
          <Image
            width={100}
            height={100}
            src="https://bit.ly/kent-c-dodds"
            alt="User profile picture"
            className={styles.tweet__img}
          />
          <div className={styles["tweet-content"]}>
            <p className={styles["tweet-username"]}>Mavrik</p>
            <p className={styles["tweet-text"]}>
              We are back! #MI
            </p>
            <p className={styles["tweet-time"]}>15m ago</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WhatsHappening;
