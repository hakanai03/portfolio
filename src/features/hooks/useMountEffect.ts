import { useEffect } from "react";

export const useMountEffect = (func: () => void | (() => void)) => {
  useEffect(func, []);
};
