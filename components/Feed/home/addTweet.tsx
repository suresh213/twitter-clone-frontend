import tweetService from "@/services/tweets";
import styles from "@/styles/Feed.module.scss";
import Image from "next/image";
import { useState } from "react";
import { TweetsType } from "../types";
import { getUser } from "@/middleware/localStorageMiddleware";

type AddTweetProps = {
  tweets: TweetsType;
  setTweets: any;
};

const AddTweet = ({ tweets, setTweets }: AddTweetProps) => {
  const [newTweet, setNewTweet] = useState<string>("");
  const user = getUser();

  const postTweet = async () => {
    const data = {
      content: newTweet,
    };

    try {
      const res = await tweetService.add(data);
      setTweets([res.data.data, ...tweets]);
      setNewTweet("");
    } catch (err) {}
  };

  return (
    <div className={styles.add_tweet_container}>
      <div className={styles.add_tweet}>
        <div className={styles.add_tweet_profile_image}>
          <Image
            src={user?.avatar}
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
