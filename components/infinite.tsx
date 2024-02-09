import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type InfiniteType = {
  frame19?: string;

  /** Style props */
  frameIconTop?: CSSProperties["top"];
  frameIconLeft?: CSSProperties["left"];
};

const Infinite: NextPage<InfiniteType> = ({
  frame19,
  frameIconTop,
  frameIconLeft,
}) => {
  const frameIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: frameIconTop,
      left: frameIconLeft,
    };
  }, [frameIconTop, frameIconLeft]);

  return (
    <img
      className="absolute top-[2068px] left-[146px] w-[5860px] h-[334px] overflow-hidden object-contain"
      alt=""
      src={frame19}
      style={frameIcon1Style}
    />
  );
};

export default Infinite;
