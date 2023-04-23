import styles from "@/styles/Feed.module.scss";
import { useState } from "react";
import AddTweet from "./addTweet";
import AllTweet from "./allTweets";

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

const tempTweets: Tweets = [
  {
    id: 1,
    author: "Mark Zuckerberg",
    username: "finkd",
    time: "2m",
    content:
      "I just met with President Macron and a group of ministers to talk about how we can work together on internet regulation that protects people's privacy and security while also giving them more control over their data. Thanks to everyone who's been engaging on these issues!",
    avatar: "https://bit.ly/ryan-florence",
    avatarAlt: "Mark Zuckerberg's profile picture",
    comments: 62,
    retweets: 216,
    likes: 1574,
  },
  {
    id: 2,
    author: "Elon Musk",
    username: "elonmusk",
    time: "5h",
    content: "On SNL next week",
    avatar: "https://bit.ly/sage-adebayo",
    avatarAlt: "Elon Musk's profile picture",
    comments: 835,
    retweets: 5476,
    likes: 145478,
  },
  {
    id: 3,
    author: "Barack Obama",
    username: "BarackObama",
    time: "12h",
    content:
      "Congratulations to my friend, President @JoeBiden! This is your time. https://t.co/LXzxGnBAfz",
    avatar: "https://bit.ly/kent-c-dodds",
    avatarAlt: "Barack Obama's profile picture",
    comments: 1763,
    retweets: 31252,
    likes: 402051,
  },
  {
    id: 4,
    author: "Kamala Harris",
    username: "KamalaHarris",
    time: "1d",
    content:
      "Happy birthday to my husband, Doug! I’m grateful for your love, your compassion, your steadiness, and your dance moves. I love you more than I can put into words.",
    avatar: "https://bit.ly/ryan-florence",
    avatarAlt: "Kamala Harris's profile picture",
    comments: 86,
    retweets: 1262,
    likes: 33479,
  },
  {
    id: 5,
    author: "Bill Gates",
    username: "BillGates",
    time: "1d",
    content:
      "Congratulations to @melindagates and @MacPapers, the recipient of this year's George Washington Carver Award for Innovation in Industrial Biotechnology and Agriculture. This award recognizes innovation in the field of biobased and renewable chemicals!",
    avatar: "https://bit.ly/code-beast",
    avatarAlt: "Bill Gates's profile picture",
    comments: 42,
    retweets: 197,
    likes: 1733,
  },
];

const Home = () => {
  const [tweets, setTweets] = useState<Tweets>(tempTweets);

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
