"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { FC } from "react";
type WorkSliderBtnsProps={
    containerStyles: string;
    btnStyles: string;
}
const WorkSliderBtns:FC<WorkSliderBtnsProps> = ({containerStyles,btnStyles}) => {
    const swiper =useSwiper()
  return <div className={containerStyles}>
        <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold/>
        </button>
        <button className={btnStyles} onClick={()=>swiper.slideNext()}>
            <PiCaretRightBold/>
        </button>
  </div>;
};

export default WorkSliderBtns;
