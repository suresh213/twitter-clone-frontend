import React from "react";
import styles from "@/styles/Feed.module.scss";
import Image from "next/image";
import { logo } from "@/utils/constants";
import { BiHomeCircle, BiHash } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { TbDotsCircleHorizontal } from "react-icons/tb";

const navLinks = [
  {
    text: "Home",
    icon: <BiHomeCircle />,
  },
  {
    text: "Explore",
    icon: <BiHash />,
  },
  {
    text: "Notifications",
    icon: <RiNotification2Line />,
  },
  {
    text: "Messages",
    icon: <FiMail />,
  },
  {
    text: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    text: "Profile",
    icon: <IoMdPerson />,
  },
  {
    text: "More",
    icon: <TbDotsCircleHorizontal />,
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.navigation}>
        {navLinks.map((navLink) => (
          <div className={styles.navigationLink} key={navLink.text}>
            {navLink.icon}
            <p>{navLink.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
