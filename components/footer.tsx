import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="absolute top-[10058px] left-[85px] w-[1316px] overflow-hidden flex flex-row items-center justify-end text-center text-11xl text-white font-nunito">
      <div className="flex-1 relative h-[166px]">
        <a
          className="[text-decoration:none] absolute top-[5px] left-[483px] w-[39px] h-[39px] overflow-hidden"
          href="https://www.instagram.com/blockchainsrm/"
          target="_blank"
        >
          <img
            className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[33.33%] bottom-[33.33%] left-[33.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </a>
        <a className="[text-decoration:none] absolute top-[0px] left-[547px] w-12 h-[47px] overflow-hidden">
          <img
            className="absolute h-[83.19%] w-[83.33%] top-[8.3%] right-[8.33%] bottom-[8.51%] left-[8.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </a>
        <img
          className="absolute top-[8px] left-[620px] w-[45px] h-9 overflow-hidden"
          alt=""
          src="/logosdiscordicon.svg"
        />
        <img
          className="absolute top-[3px] left-[690px] w-11 h-11 overflow-hidden"
          alt=""
          src="/iconparkoutlinetelegram.svg"
        />
        <img
          className="absolute top-[6px] left-[760px] w-9 h-[38px] overflow-hidden"
          alt=""
          src="/radixiconslinkedinlogo.svg"
        />
        <img
          className="absolute top-[7px] left-[823px] w-[38px] h-[37px] overflow-hidden"
          alt=""
          src="/mditwitter.svg"
        />
        <div className="absolute top-[125px] left-[0px] tracking-[0.04em]">
          Powered by @Devfolio
        </div>
        <div className="absolute top-[125px] left-[1126px] tracking-[0.04em]">
          Crafted by @
        </div>
      </div>
      <div className="flex-1 relative tracking-[0.04em] ml-[-737px]">
        Lorem Ipsum
      </div>
    </div>
  );
};

export default Footer;
