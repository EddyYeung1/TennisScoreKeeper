import React from "react";
import styles from "./playerCard.module.css";

export default function PlayerCard(props) {
  const { name, flag, img } = props;
  return (
    <p className={styles.name}>
      {name} {flag}
    </p>
  );
}
