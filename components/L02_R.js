import { useState, useEffect } from "react";
import styles from "../styles/Landing.module.css";

const L02_R = ({ color }) => {
  const [index, setIndex] = useState(null);
  const colorArray = [
    "red",
    "blue",
    "yellow",
    "green",
    "brown",
    "purple",
    "orange",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };
  return (
    <div
      className={styles.item2}
      style={{ background: colorArray[index], gridColumnStart: "9", gridColumnEnd: "17", gridRowStart: "0", gridRowEnd: "9", border: "2px solid black" }}
      onClick={() => changeIndex()}
    >L02_R
      <div className={styles.item2}>
        {" "}
        <div className={styles.item1}>
          {" "}
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
        </div>
        <div className={styles.item2}>
          {" "}
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
        </div>
        <div className={styles.item3}>
          {" "}
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
        </div>
        <div className={styles.item4}>
          {" "}
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
          <div className={styles.item4}></div>
        </div>
      </div>
    </div>
  );
  s;
};

export default L02_R;
