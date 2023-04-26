import React from "react";
import styles from "@/styles/Feed.module.scss";
import Sidebar from "@/components/Feed/sidebar";
import Home from "@/components/Feed/home/home";
import Extras from "@/components/Feed/extras/extras";
import withAuth from "@/middleware/withAuth";

const Feed = () => {
  return (
    <div className={styles.feed_container}>
      <Sidebar />
      <Home />
      <Extras />
    </div>
  );
};

export default withAuth(Feed);
