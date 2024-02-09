import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type JDescriptionType = {
  /** Style props */
  frameTop?: CSSProperties["top"];
  frameLeft?: CSSProperties["left"];
  frameWidth?: CSSProperties["width"];
  frameHeight?: CSSProperties["height"];
  descriptionTop?: CSSProperties["top"];
  descriptionTop1?: CSSProperties["top"];
  descriptionLeft?: CSSProperties["left"];
  descriptionTop2?: CSSProperties["top"];
  descriptionLeft1?: CSSProperties["left"];
};

const JDescription: NextPage<JDescriptionType> = ({
  frameTop,
  frameLeft,
  frameWidth,
  frameHeight,
  descriptionTop,
  descriptionTop1,
  descriptionLeft,
  descriptionTop2,
  descriptionLeft1,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      top: frameTop,
      left: frameLeft,
      width: frameWidth,
      height: frameHeight,
    };
  }, [frameTop, frameLeft, frameWidth, frameHeight]);

  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      top: descriptionTop,
    };
  }, [descriptionTop]);

  const description1Style: CSSProperties = useMemo(() => {
    return {
      top: descriptionTop1,
      left: descriptionLeft,
    };
  }, [descriptionTop1, descriptionLeft]);

  const description2Style: CSSProperties = useMemo(() => {
    return {
      top: descriptionTop2,
      left: descriptionLeft1,
    };
  }, [descriptionTop2, descriptionLeft1]);

  return (
    <div
      className="absolute top-[615px] left-[3831px] w-[1163px] h-[34px] overflow-hidden text-center text-6xl text-white font-inter"
      style={frameStyle}
    >
      <div
        className="absolute top-[5px] left-[0px] inline-block w-[184px] h-[29px]"
        style={descriptionStyle}
      >
        Description
      </div>
      <div
        className="absolute top-[0px] left-[494px] inline-block w-[184px] h-[29px]"
        style={description1Style}
      >
        Description
      </div>
      <div
        className="absolute top-[0px] left-[979px] inline-block w-[184px] h-[29px]"
        style={description2Style}
      >
        Description
      </div>
    </div>
  );
};

export default JDescription;
