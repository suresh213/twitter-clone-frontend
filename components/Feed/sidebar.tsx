import React from "react";
import styles from "@/styles/Feed.module.scss";
import Image from "next/image";
import { logo } from "@/utils/constants";
import { BiHomeCircle, BiHash } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { Router, useRouter } from "next/router";
import { getUser, logout } from "@/middleware/localStorageMiddleware";

const navLinks = [
  {
    text: "Home",
    icon: <BiHomeCircle />,
    path: "/feed",
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
  const router = useRouter();
  const user = getUser();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.navigation}>
        {navLinks.map((navLink) => (
          <button className={styles.navigationLink} key={navLink.text}>
            {navLink.icon}
            <p
              style={
                router.pathname === navLink.path ? { fontWeight: 800 } : {}
              }
            >
              {navLink.text}
            </p>
          </button>
        ))}

        <button
          className={styles.navigationLink}
          onClick={() => logout(router)}
        >
          <AiOutlineLogout />
          <p>Logout</p>
        </button>
      </div>
      <div className={styles.profile}>
        <Image src={user?.avatar} alt="logo" width={100} height={100} />
        <div className={styles.profile_details}>
          <p className={styles.profile_details_name}>{user?.name}</p>
          <p className={styles.profile_details_username}>{user?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
