import styles from "@/styles/Feed.module.scss";
import { useState } from "react";
import { TweetsType } from "../types";
import AddTweet from "./addTweet";
import AllTweet from "./allTweets";
import { useEffect } from "react";
import tweetService from "@/services/tweets";

const Home = () => {
  const [tweets, setTweets] = useState<TweetsType>([]);

  const getTweets = async () => {
    try {
      const res = await tweetService.getAll();
      setTweets(res.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.header}>Home</div>
      <AddTweet tweets={tweets} setTweets={setTweets} />
      <div className={styles.tweets_header}>Tweets</div>
      <AllTweet tweets={tweets} />
    </div>
  );
};

export default Home;
