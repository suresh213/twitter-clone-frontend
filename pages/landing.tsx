import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";
import adImage from "../assets/ad.png";
import addtweetImage from "../assets/addtweet.png";
import mytweetImage from "../assets/mytweet.png";
import peopletweetsImage from "../assets/peopletweets.png";
import signinImage from "../assets/signin.png";
import twitterImage from "../assets/twitter.png";
import whatshappeningImage from "../assets/whatshappening.png";
import styles from "../styles/Landing.module.scss";

const steps = [
  {
    title: "Promote Advertisements",
    description:
      "Grow your business and reach a larger audience by promoting your advertisements. Our step-by-step process will help you get customers from all over the world. See an example of a successful advertisement in the accompanying image.",
    image: adImage,
  },
  {
    title: "Post Tweet",
    description:
      "Connect with your followers and share your thoughts with the world by posting a tweet. Our user-friendly interface makes it easy to fill in all the relevant details. Hide particular sections while you view different layouts. See a sample tweet in the accompanying image.",
    image: addtweetImage,
  },
  {
    title: "My Tweets",
    description:
      "Keep track of all your tweets in one place. Our simple layout allows you to easily navigate through your posts and see your engagement metrics. The accompanying image shows an example of what your tweet history might look like.",
    image: mytweetImage,
  },
  {
    title: "People Tweets",
    description:
      "Find inspiration for your own tweets by exploring what others are posting. Export tweets from other users without any watermarks, advertisements, or credit card requirements. The accompanying image shows an example of what this feature might look like in action.",
    image: peopletweetsImage,
  },
  {
    title: "Sign in with Google",
    description:
      "Sign in to our platform quickly and easily with your Google account. No need to remember yet another username and password. The accompanying image shows an example of what the sign-in process might look like.",
    image: signinImage,
  },
  {
    title: "Whats happening",
    description:
      " Stay up-to-date with what's going on in the world by browsing our trending topics. The accompanying image shows an example of some of the current trending topics.",
    image: whatshappeningImage,
  },
];

const stepIndexColors = [
  "#DAF8F8",
  "#F7F8DA",
  "#F8DAE6",
  "#DAF8DF",
  "#DAF8F8",
  "#F7F8DA",
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Login to twitter" />
      </Head>
      <Navbar />
      <main className={styles.landing}>
        <section className={styles.content_container}>
          <div className={styles.content}>
            <h2>
              <span className={styles.gradient_text}>Connect</span> with people
            </h2>
            <h3>
              Build <span className={styles.gradient_text}>connections</span>
            </h3>
            <h4>
              Stay up to date with{" "}
              <span className={styles.gradient_text}>world</span>
            </h4>
          </div>
          <div className={styles.image_container}>
            <Image src={twitterImage} alt="twitter" />
          </div>
        </section>

        <section className={styles.steps}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              {index % 2 != 0 && (
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={step.image}
                    alt={"title"}
                  />
                </div>
              )}
              <div className={styles.details}>
                <div
                  className={
                    index % 2 != 0 ? styles.upperflexstart : styles.upperflexend
                  }
                >
                  <p
                    className={styles.stepIndex}
                    style={{ backgroundColor: stepIndexColors[index] }}
                  >
                    {index + 1}
                  </p>
                </div>
                <div className={styles.lower}>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
              {index % 2 == 0 && (
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={step.image}
                    alt={"title"}
                  />
                </div>
              )}
            </div>
          ))}
        </section>
        <footer className={styles.footer}>
          <p className={styles.madewithlove}>
            Made with <BsHeartFill /> from India
          </p>
        </footer>
      </main>
    </>
  );
}
