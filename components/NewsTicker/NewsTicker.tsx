"use client";
import React, { useState, useEffect } from "react";
import styles from "./NewsTicker.module.css";
const string = "$Ponky".repeat(10000);
const newsItems = Array(100000).fill(string);
const NewsTicker = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 1); // Change this interval according to your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-3 bg">
      <div className={styles.newsTicker}>
        <span className=" bg-yellow-600  text-xl text-black">
          {newsItems[tickerIndex]}
        </span>
      </div>
    </div>
  );
};

export default NewsTicker;
