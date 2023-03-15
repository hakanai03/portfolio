import { FC, ReactNode } from "react";
import styles from "./shine.module.css";

export const Shine: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className={styles.shine}>{children}</div>;
};
