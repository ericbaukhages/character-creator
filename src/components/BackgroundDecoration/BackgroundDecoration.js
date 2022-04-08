import React from "react";

import styles from "./BackgroundDecoration.module.css";

const BackgroundDecoration = ({ children }) => {
  return <div className={styles.backgroundDecoration}>{children}</div>;
};

export default BackgroundDecoration;
