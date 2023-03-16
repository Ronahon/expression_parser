import React, { useState } from "react";
import CharactersArray from "./CharactersArray";
import styles from "./Explanation.module.css";
import ExplanationText from "./ExplanationText";

const Explanation = ({ infix, postfixData }) => {
  const [index, setIndex] = useState(0);

  const currentStringNumberIteration = postfixData.stringNumberIterations[index]
  const currentStackStep = postfixData.stackIterations[index]
  const currentOutputStep = postfixData.outputIterations[index]
  const currentExplanation = postfixData.explanationsLog[index]

  const maxIndex = postfixData.stackIterations.length;

  const clickHandler = (step) => {
    if(index + step >= 0 && index + step < maxIndex) setIndex(prevState => prevState + step)
  }

  return (
    <>
      <div className={styles.controls}>
        <button onClick={() => setIndex(0)}>{`<<`}</button>
        <button onClick={() => clickHandler(-1)}>{`<`}</button>
        <button onClick={() => clickHandler(1)}>{`>`}</button>
        <button onClick={() => setIndex(maxIndex-1)}>{`>>`}</button>
      </div>
      <div className={styles.algorithm}>{currentExplanation.text}</div>
      <ExplanationText operatorType={currentExplanation.type} explanationCase={null}/>
      <CharactersArray data={infix} name={"Characters array:"} current={index} fixed="true"/>
      <CharactersArray data={currentStringNumberIteration} name={"String number:"} fixed="true"/>
      <CharactersArray data={currentStackStep} name={"Stack array:"} fixed="true"/>
      <CharactersArray data={currentOutputStep} name={"Output array:"} fixed="true"/>
    </>
  );
};

export default Explanation;
