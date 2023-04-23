import styles from "@/styles/Feed.module.scss";
import Tweet from "./tweet";

type TweetType = {
  id: number;
  author: string;
  username: string;
  time: string;
  content: string;
  avatar: string;
  avatarAlt: string;
  comments: number;
  retweets: number;
  likes: number;
};

type AllTweetProps = {
  tweets: Array<TweetType>;
};

const AllTweet = ({ tweets }: AllTweetProps) => {
  return (
    <div className={styles.all_tweet}>
      {tweets.map((tweet: Tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default AllTweet;
