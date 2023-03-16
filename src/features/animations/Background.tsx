import { FC, ReactNode, useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";
import { useMountEffect } from "../hooks/useMountEffect";

export const Background: FC<{
  children?: ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const ref = useRef(null);

  useMountEffect(() => {
    const effect = FOG({
      el: ref.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xf0f0e,
      midtoneColor: 0x5d5db9,
      lowlightColor: 0x894949,
      baseColor: 0x0,
      blurFactor: 0.76,
      speed: 1.8,
      zoom: 0.5,
    });

    return () => effect.destroy();
  });

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};
