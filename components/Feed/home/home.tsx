import styles from "@/styles/Feed.module.scss";
import { useState } from "react";
import { TweetsType } from "../types";
import AddTweet from "./addTweet";
import AllTweet from "./allTweets";
import { useEffect } from "react";
import tweetService from "@/services/tweets";

const tabs = ["People", "My Tweets"];

const Home = () => {
  const [tweets, setTweets] = useState<TweetsType>([]);
  const [tab, setTab] = useState<number>(0);

  const getTweets = async () => {
    const query = tab === 1 ? "?my=true" : "";
    try {
      const res = await tweetService.getAll(query);
      setTweets(res.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    getTweets();
  }, [tab]);

  return (
    <div className={styles.home}>
      <div className={styles.header}>Home</div>
      <AddTweet tweets={tweets} setTweets={setTweets} />
      <div className={styles.tweets_header_container}>
        {tabs.map((tabName, index) => (
          <button
            key={tabName}
            onClick={() => setTab(index)}
            className={
              tab === index
                ? styles.selected_tweets_header
                : styles.tweets_header
            }
          >
            {tabName}
          </button>
        ))}
      </div>
      <AllTweet tweets={tweets} />
    </div>
  );
};

export default Home;
