import React from "react";
import styles from "./scoreBlock.module.css";

export default function scoreBlock(props) {
  const { score, setScore } = props;
  const classType = setScore ? styles.setScore : styles.gameScore;
  return <p className={classType}> {score} </p>;
}
