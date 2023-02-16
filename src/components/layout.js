import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import SideBar from "./sidebar/sidebar";

export default function Layout({ children }) {
  return (
    <>
      <SideBar />
      <main className={`${styles["main-left"]}`}>{children}</main>
    </>
  );
}
