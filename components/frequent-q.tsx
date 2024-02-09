import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FrequentQType = {
  rectangleDivTop?: CSSProperties["top"];
};

const FrequentQ: NextPage<FrequentQType> = ({ rectangleDivTop }) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  return (
    <div
      className="absolute top-[3311px] left-[3736px] rounded-xl box-border w-[1365px] h-[101px] border-[3px] border-solid border-darkgray"
      style={rectangleDivStyle}
    />
  );
};

export default FrequentQ;
