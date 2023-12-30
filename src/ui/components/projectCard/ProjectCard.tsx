import React, { useEffect } from 'react'
import style from "@/ui/styles/components/projectCard/ProjectCard.module.scss"
import Image from 'next/image'
import { project } from '@/utils/types/types'
import Aos from "aos"
import "aos/dist/aos.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faGlobe} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import { useSelector } from '@/libs/redux/hooks/reduxHooks'
import { techSkill } from '../../../utils/types/types';

export const ProjectCard = ( {name, description, rol, technologies, repositoryURL, deployURL, imageURL}:project) => {
  
  const techSkills:techSkill[]=useSelector((state)=>state.skills.techSkills)

  let techImages:Object[]=[]
  
  technologies?.forEach((skill:string)=>{
    for(let tech of techSkills){
      if(skill===tech.name){
        techImages.push({image:tech.image})
      }
    }
  })

  useEffect(()=>{
    Aos.init()
  }, [])


  return (
    <div className={style.cardCont} data-aos="flip-left">
      <h2 className={style.name}>{name}</h2>
      <div className={style.projectInfo}>
        <div style={{width:"100%", height:"100%"}} >
          <Image src={imageURL} alt={name} layout='fill' objectFit='cover' className={style.img}/>
        </div>
        <div className={style.infoCont}>
          <h3 className={style.rol}>{rol}</h3>
          <div className={style.techImages}>

            {
              techImages.map((techImage:any, i: number) => {
                return (
                  <Image key={i} src={techImage.image} alt='tech' width={25} height={25} />
                );
              })
            }
          </div>
        </div>
        <div className={style.urlCont}>
          <Link href={deployURL} className={style.link} target='blank'><FontAwesomeIcon icon={faGlobe}/> Deploy</Link>
          <Link href={repositoryURL} className={style.link} target='blank'><FontAwesomeIcon icon={faGithub}/> Repo</Link>
        </div>
      </div>
    </div>
  )
}
