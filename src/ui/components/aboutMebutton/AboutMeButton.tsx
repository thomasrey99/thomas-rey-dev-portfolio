"use client"
import { scrollToSection } from "@/utils/functions/scrollTo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import style from "@/ui/styles/components/aboutMeButton/aboutMeButton.module.scss"

const AboutMeButton = () => {
  return (
    <button onClick={()=>scrollToSection("About")} className={style.button}>More about me <FontAwesomeIcon icon={faArrowRight} className={style.arrow}/></button>
  )
}


export default AboutMeButton