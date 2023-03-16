import { FC, ReactNode } from "react";
import styles from "./shine.module.css";

export const Shine: FC<{
  children?: ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div className={styles.shine} style={style}>
      {children}
    </div>
  );
};
