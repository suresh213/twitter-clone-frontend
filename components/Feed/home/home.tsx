import styles from "@/styles/Feed.module.scss";
import { useState } from "react";
import { TweetsType } from "../types";
import AddTweet from "./addTweet";
import AllTweet from "./allTweets";

const tempTweets: TweetsType = [
  {
    id: 1,
    author: {
      name: "Mark Zuckerberg",
      username: "finkd",
      avatar: "https://bit.ly/ryan-florence",
    },
    createdAt: "2m",
    content:
      "I just met with President Macron and a group of ministers to talk about how we can work together on internet regulation that protects people's privacy and security while also giving them more control over their data. Thanks to everyone who's been engaging on these issues!",
  },
  {
    id: 2,
    author: {
      name: "Elon Musk",
      username: "elonmusk",
      avatar: "https://bit.ly/sage-adebayo",
    },
    createdAt: "5h",
    content: "On SNL next week",
  },
  {
    id: 3,
    author: {
      name: "Barack Obama",
      username: "BarackObama",
      avatar: "https://bit.ly/kent-c-dodds",
    },
    createdAt: "12h",
    content:
      "Congratulations to my friend, President @JoeBiden! This is your createdAt. https://t.co/LXzxGnBAfz",
  },
  {
    id: 4,
    author: {
      name: "Kamala Harris",
      username: "KamalaHarris",
      avatar: "https://bit.ly/ryan-florence",
    },
    createdAt: "1d",
    content:
      "Happy birthday to my husband, Doug! I’m grateful for your love, your compassion, your steadiness, and your dance moves. I love you more than I can put into words.",
  },
  {
    id: 5,
    author: {
      name: "Bill Gates",
      username: "BillGates",
      avatar: "https://bit.ly/code-beast",
    },
    createdAt: "1d",
    content:
      "Congratulations to @melindagates and @MacPapers, the recipient of this year's George Washington Carver Award for Innovation in Industrial Biotechnology and Agriculture. This award recognizes innovation in the field of biobased and renewable chemicals!",
  },
];

const Home = () => {
  const [tweets, setTweets] = useState<TweetsType>(tempTweets);

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
