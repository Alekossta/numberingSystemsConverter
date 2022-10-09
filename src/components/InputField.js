import React from "react";
import styles from "./InputField.module.css";

function InputField(props) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{props.label}</label>
      <input
        className={styles.input}
        onChange={props.onChange}
        value={props.value || ""}
      />
    </div>
  );
}

export default InputField;
