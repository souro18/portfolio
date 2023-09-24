import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuSlide } from "../anim";
// import Link from './Link';
import Curve from "../Curve";
// import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link key={index} href={data.href}>
                {data.title}
              </Link>
            );
          })}
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
