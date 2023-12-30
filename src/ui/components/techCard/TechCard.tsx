"use client"
import style from "@/ui/styles/components/techCard/techCard.module.scss"
import { techSkill } from "@/utils/types/types"
import Aos from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import { useEffect } from "react"

const TechCard = ({name, image, level, yearExperience}:techSkill) => {

    useEffect(()=>{
        Aos.init()
    }, [])

  return (
    <div className={style.cardCont}  data-aos="zoom-in" >
        <div className={style.imgCont}>
            <Image src={image} alt={name} width={100} height={100} priority={true}/>
        </div>
        <div className={style.infoCont}>
            <h3 className={style.name}>{name}</h3>
            <p>{yearExperience} {yearExperience>1?"years":"year"}</p>
            <div className={style.skill}>
                <div className={style.skillLevel}>
                    <div className={style.skillPercent} style={{width:`${level}%`}}></div>
                </div>
                <div className={style.skillPercentNumber}><span className={style.xp}>{level}%</span></div>
            </div>
        </div>
    </div>
  )
}

export default TechCard