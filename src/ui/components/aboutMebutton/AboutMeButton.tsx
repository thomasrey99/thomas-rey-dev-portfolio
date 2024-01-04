"use client"
import { scrollToSection } from "@/utils/functions/scrollTo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import style from "@/ui/styles/components/aboutMeButton/aboutMeButton.module.scss"
import Image from "next/image"
import arrowIcon from "@/assets/arrow-right-solid.svg"
const AboutMeButton = () => {
  return (
    <button onClick={()=>scrollToSection("About")} className={style.button}>More about me {/*<FontAwesomeIcon icon={faArrowRight} className={style.arrow}/>*/} <Image src={arrowIcon} className={style.arrow} alt="arrow icon"/></button>
  )
}


export default AboutMeButton