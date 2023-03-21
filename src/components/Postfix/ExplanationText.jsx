import React from 'react'
import styles from './ExplanationText.module.css'

const ExplanationText = ({operatorType, explanationCase}) => {
  const trueStatements = explanationCase?.shouldProceed?.trueStatements || [];
  const overallValue = explanationCase?.shouldProceed.value;

  // console.log(explanationCase.shouldProceed.value)

  const renderText = () => {
    if(operatorType === "Start") return <div className={styles.text}><div className={styles.title}>{operatorType}</div>Start the step by step visualization</div>
    if(operatorType === "Digit") return <div className={styles.text}><div className={styles.title}>{operatorType}</div>If character is a digit append it to the strign number representation</div>
    if(operatorType === "Negation") return <div className={styles.text}><div className={styles.title}>{operatorType}</div><p className={`${styles["overall-statement"]} ${overallValue ? styles["overall-true"] : styles["overall-unmached"]}`}><span className={`${styles.statement} ${trueStatements.includes(0) ? styles.true : styles.unmached}`}>If "-" appears at the beggining of the expression </span> or <span className={`${styles.statement} ${trueStatements.includes(1) ? styles.true : styles.unmached}`}>"(" is at the top of the operator stack and the incoming character is "-"</span> or <span className={`${styles.statement} ${trueStatements.includes(2) ? styles.true : styles.unmached}`}>incoming char is not "(" and any other operator is at the top of the operator stack</span></p> then prepend "-" to the string number representatnion</div>
    if(operatorType === "Operator") return <div className={styles.text}><div className={styles.title}>{operatorType}</div><p className={`${styles["overall-statement"]} ${explanationCase.stringHasValue ? styles["overall-true"] : styles["overall-unmached"]}`}><span className={`${styles.statement} ${explanationCase.stringHasValue ? styles.true : styles.unmached}`}>if string number representatnion holds any number push the number to the optput array and clear the string.</span></p> <p className={`${styles["overall-statement"]} ${overallValue ? styles["overall-true"] : styles["overall-false"]}`}>Then while <span className={`${styles.statement} ${trueStatements.includes(0) ? styles.true : styles.false}`}>stack has any operators in it</span> and <span className={`${styles.statement} ${trueStatements.includes(1) ? styles.true : styles.false}`}>"(" is not at the top of the stack</span> and <span className={`${styles.statement} ${trueStatements.includes(2) ? styles.true : styles.false}`}>precedence of the operator at the top of the stack is greater than precedence of incominc operator</span> push what's on the top of the stack to the output array. Then push the incoming operator to the operator stack</p></div>
    if(operatorType === "Left parenthesis") return <div className={styles.text}><div className={styles.title}>{operatorType}</div>If character is a left parenthesis then push it to the operator stack</div>
    
    if(operatorType === "Right parenthesis") return <div className={styles.text}><div className={styles.title}>{operatorType}</div><p className={`${styles["overall-statement"]} ${overallValue ? styles["overall-true"] : styles["overall-unmached"]}`}><span className={`${styles.statement} ${explanationCase.stringHasValue ? styles.true : styles.unmached}`}>If string number contains any number </span>push this number to the output array</p> <p className={`${styles["overall-statement"]} ${overallValue ? styles["overall-true"] : styles["overall-false"]}`}>then while <span className={`${styles.statement} ${trueStatements.includes(0) ? styles.true : styles.false}`}>character at the top of the stack is not "("</span> and <span className={`${styles.statement} ${trueStatements.includes(0) ? styles.true : styles.false}`}>stack is not empty</span> push operator at the top of the stack to the output array then delete the left parenthesis</p></div>
    if(operatorType === "Outputing") return <div className={styles.text}><div className={styles.title}>{operatorType}</div>If <p className={`${styles.statement} ${explanationCase.stringHasValue ? styles.true : styles.unmached}`}>string number representatnion contains any number left</p> or <p className={`${styles.statement} ${explanationCase.stackHasValue ? styles.true : styles.unmached}`}>the stack isn't empty</p> push everything to the output</div>
    if(operatorType === "The End") return <div className={styles.text}><div className={styles.title}>{operatorType}</div>Final result of postfix expression</div>
  }
  
  return (
    <>
      {renderText()}
    </>
  )
} 

export default ExplanationText