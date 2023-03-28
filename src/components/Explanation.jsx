import React, { useState } from "react";
import styles from "./Explanation.module.css";

import Modal from "./UI/Modal";

const Explanation = ({ index, maxIndex, onSetIndex, onClose, children }) => {
  const clickHandler = (step) => {
    if (index + step >= 0 && index + step < maxIndex)
      onSetIndex((prevState) => prevState + step);
  };

  return (
    <Modal onClose={onClose}>
      <button onClick={onClose} className={styles["go-back"]}>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div className={styles.controls}>
        <button onClick={() => onSetIndex(0)}>{`<<`}</button>
        <button onClick={() => clickHandler(-1)}>{`<`}</button>
        <button onClick={() => clickHandler(1)}>{`>`}</button>
        <button onClick={() => onSetIndex(maxIndex - 1)}>{`>>`}</button>
      </div>
      <div className={styles.stepsCounter}>
        {index + 1} / {maxIndex}
      </div>
      {children}
    </Modal>
  );
};

export default Explanation;
