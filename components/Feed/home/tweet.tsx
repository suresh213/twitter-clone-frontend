import styles from "@/styles/Feed.module.scss";
import Image from "next/image";
import {
  FaRegComment,
  FaRegHeart,
  FaRetweet,
  FaRegShareSquare,
} from "react-icons/fa";

type Tweet = {
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

type Tweets = Array<Tweet>;

interface TweetProps {
  tweet: Tweet;
}

const Tweet = ({ tweet }: TweetProps) => {
  const isMention = (word: string) => {
    return word.startsWith("@") || word.startsWith("https");
  };

  const formatText = (text?: string) => {
    const words = text?.split(" ");
    return words?.map((word) =>
      isMention(word) ? (
        <span className={styles.mention} key={word}>
          {word}{" "}
        </span>
      ) : (
        <>{word} </>
      )
    );
  };

  return (
    <div className={styles.tweet}>
      <div className={styles.tweet_profile_image}>
        <Image
          src={tweet.avatar || ""}
          alt="Profile Image"
          width={100}
          height={100}
          className={styles.profile_image}
        />
      </div>
      <div className={styles.tweet_container}>
        <div className={styles.user_details_container}>
          <span className={styles.name}>{tweet.author}</span>
          <span className={styles.username}>@{tweet.username}</span>
          <span className={styles.time}>{tweet.time}</span>
        </div>
        <div className={styles.content}>
          <p>{formatText(tweet.content)}</p>
        </div>
        <div className={styles.actions}>
          <button>
            <FaRegComment />
          </button>
          <button>
            <FaRetweet />
          </button>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <FaRegShareSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
