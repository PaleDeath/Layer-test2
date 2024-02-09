import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Scroll1Type = {
  image35?: string;

  /** Style props */
  image35IconTop?: CSSProperties["top"];
  image35IconLeft?: CSSProperties["left"];
  image35IconWidth?: CSSProperties["width"];
  image35IconHeight?: CSSProperties["height"];
  image35IconOpacity?: CSSProperties["opacity"];
};

const Scroll1: NextPage<Scroll1Type> = ({
  image35,
  image35IconTop,
  image35IconLeft,
  image35IconWidth,
  image35IconHeight,
  image35IconOpacity,
}) => {
  const image35IconStyle: CSSProperties = useMemo(() => {
    return {
      top: image35IconTop,
      left: image35IconLeft,
      width: image35IconWidth,
      height: image35IconHeight,
      opacity: image35IconOpacity,
    };
  }, [
    image35IconTop,
    image35IconLeft,
    image35IconWidth,
    image35IconHeight,
    image35IconOpacity,
  ]);

  return (
    <img
      className="absolute top-[913px] left-[calc(50%_-_407.6px)] w-[781px] h-[686px] object-cover"
      alt=""
      src={image35}
      style={image35IconStyle}
    />
  );
};

export default Scroll1;
