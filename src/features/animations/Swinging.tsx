import { FC, ReactNode } from "react";
import styles from "./swinging.module.css";

export const Swinging: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className={styles.swinging}>{children}</div>;
};
