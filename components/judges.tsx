import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type JudgesType = {
  frame?: string;

  /** Style props */
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
};

const Judges: NextPage<JudgesType> = ({
  frame,
  frameIconTop,
  frameIconLeft,
  frameIconWidth,
  frameIconHeight,
}) => {
  const frameIconStyle: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop,
      left: frameIconLeft,
      width: frameIconWidth,
      height: frameIconHeight,
    };
  }, [frameIconTop, frameIconLeft, frameIconWidth, frameIconHeight]);

  return (
    <img
      className="absolute top-[239px] left-[3755px] w-[1306px] h-[301px] overflow-hidden object-contain"
      alt=""
      src={frame}
      style={frameIconStyle}
    />
  );
};

export default Judges;
