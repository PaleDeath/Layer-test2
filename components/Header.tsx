import React from "react";
import { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="absolute top-[35px] left-[0px] w-[1342px] h-[61.2px] text-center text-3xl text-white font-montserrat">
      <div className="absolute top-[10px] right-[0px] overflow-hidden flex flex-row items-start justify-start">
        <a href="#about" className="[text-decoration:none] w-[130px] relative tracking-[0.01em] font-medium text-paleturquoise inline-block shrink-0">
          About
        </a>
        <a href="#judges" className="[text-decoration:none] w-[140px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          Judges
        </a>
        <a href="#timeline" className="[text-decoration:none] w-[157px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          Timeline
        </a>
        <a href="#prizes" className="[text-decoration:none] w-[124px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          Prizes
        </a>
        <a href="#tracks" className="[text-decoration:none] w-[118px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          Tracks
        </a>
        <a href="#partners" className="[text-decoration:none] w-[142px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          Partners
        </a>
        <a href="#faqs" className="[text-decoration:none] w-[92px] relative tracking-[0.01em] text-[inherit] inline-block shrink-0">
          FAQs
        </a>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[209px] h-[61.2px] flex flex-row items-center justify-start gap-[12px] text-left text-lg font-audiowide">
        <img className="relative w-[53px] h-[61.2px]" alt="" src="/group.svg" />
        <div className="w-36 relative flex items-center h-[38px] shrink-0">
          BLOCKCHAIN CLUB SRM
        </div>
      </div>
    </div>
  );
};

export default Header;
