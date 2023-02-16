import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./sidebar.module.css";
const SideBar = () => {
  return (
    <header className={` ${styles["header-left"]} header`}>
      <Image
        priority
        src="/images/profile.jpg"
        className={`borderCircle`}
        height={144}
        width={144}
        alt=""
      />
      <h1 className={`heading2Xl textWhite`}>Saad Jafri</h1>
      <nav>
        <ul>
          <li>
            <Link href={`/About`}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideBar;
