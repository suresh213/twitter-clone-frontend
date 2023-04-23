import styles from "@/styles/Feed.module.scss";
import Tweet from "./tweet";
import { TweetType, TweetsType } from "../types";

type AllTweetProps = {
  tweets: TweetsType;
};

const AllTweet = ({ tweets }: AllTweetProps) => {
  return (
    <div className={styles.all_tweet}>
      {tweets.map((tweet: TweetType) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default AllTweet;
