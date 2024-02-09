import { useState, useEffect } from "react";
import { NextPage } from "next";

const TimeMain: NextPage = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  
  const calculateTimeUntil = () => {
    const targetDate = new Date("2024-03-12");
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
  };

  useEffect(() => {
    calculateTimeUntil();
    const interval = setInterval(() => {
      calculateTimeUntil();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-[0px] left-[42px] w-[562px] h-[132px] text-center text-54xl text-white font-oswald">
      <b className="absolute top-[0px] left-[calc(50%_-_277px)] tracking-[0.13em] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {days.toString().padStart(2, "0")}
      </b>
      <b className="absolute top-[0px] left-[calc(50%_-_57px)] tracking-[0.13em] text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {hours.toString().padStart(2, "0")}
      </b>
      <b className="absolute top-[0px] left-[calc(50%_+_155px)] tracking-[0.13em] inline-block text-transparent !bg-clip-text [background:linear-gradient(154.05deg,_#fff,_#08a9b3)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[104px] h-[94px] [text-shadow:1px_0_0_rgba(255,_255,_255,_0.14),_0_1px_0_rgba(255,_255,_255,_0.14),_-1px_0_0_rgba(255,_255,_255,_0.14),_0_-1px_0_rgba(255,_255,_255,_0.14)]">
        {minutes.toString().padStart(2, "0")}
      </b>
      <div className="absolute top-[98px] left-[0px] text-11xl tracking-[0.13em] font-light font-montserrat flex items-center justify-center w-[98px] h-[29px]">
        Days
      </div>
      <div className="absolute top-[95px] left-[calc(50%_-_65px)] text-11xl tracking-[0.13em] font-light font-montserrat">
        Hours
      </div>
      <div className="absolute top-[98px] left-[413px] text-11xl tracking-[0.13em] font-light font-montserrat flex items-center justify-center w-[149px] h-[29px]">
        Minutes
      </div>
    </div>
  );
};

export default TimeMain;

