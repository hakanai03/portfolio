import { useState, useEffect } from "react";

export const useTypewriter = (text: string, interval: number, delay?: number) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text, interval, delay]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, index === 0 && delay !== undefined ? delay : interval);

      return () => clearTimeout(timeout);
    }
  }, [text, interval, delay, index]);

  return displayedText;
};
