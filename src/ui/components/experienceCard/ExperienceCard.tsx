import { experience } from "@/utils/types/types"
import Image from "next/image"
import style from "@/ui/styles/components/experienceCard/experienceCard.module.scss"
export const ExperienceCard = ({name, company, description, end_date, start_date, image,}:experience) => {
  return (
    <div className={style.cardCont}>
        <div className={style.imgCont}>
            <Image src={image} alt={name} width={300} height={180} className={style.img}/>
        </div>
        <h2 className={style.rol}>{name}</h2>
        <h3 className={style.company}>{company} <span className={style.date}> <span className={style.date}>{start_date} - {end_date}</span></span></h3>
        <p className={style.description}>{description}</p>
    </div>
  )
}
