import styles from "@/styles/Feed.module.scss";
import { avatars } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import { TweetsType } from "../types";

type AddTweetProps = {
  tweets: TweetsType;
  setTweets: any;
};

const AddTweet = ({ tweets, setTweets }: AddTweetProps) => {
  const [newTweet, setNewTweet] = useState<string>("");

  const postTweet = () => {
    const data = {
      content: newTweet,
      avatar: avatars[Math.floor(Math.random() * 4) + 1],
      author: "Suresh",
      username: "suresh",
      time: "now",
    };
    setTweets([data, ...tweets]);
    setNewTweet("");
  };

  return (
    <div className={styles.add_tweet_container}>
      <div className={styles.add_tweet}>
        <div className={styles.add_tweet_profile_image}>
          <Image
            src="https://bit.ly/code-beast"
            alt="profile image"
            width={100}
            height={100}
          />
        </div>
        <textarea
          className={styles.add_tweet_input}
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
      </div>
      <div className={styles.add_tweet_actions} onClick={postTweet}>
        <button className={styles.add_tweet_button}>Tweet</button>
      </div>
    </div>
  );
};

export default AddTweet;
