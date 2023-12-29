"use client"
import { useGetTechSkillsQuery } from "@/libs/redux/services/skilsApi/skillsApi"
import { useDispatch, useSelector } from "@/libs/redux/hooks/reduxHooks"
import { setTechSkills } from "@/libs/redux/slices/skills/skillsSlice"
import { useEffect } from "react"
import style from "@/ui/styles/components/techCardsCont/cards.module.scss"
import Loader from "../loader/Loader"
import TechCard from "../techCard/TechCard"
import { techSkill } from "@/utils/types/types"

const Cards = () => {

  const dispatch=useDispatch()

  const {data, isLoading}=useGetTechSkillsQuery(null)

  const skills=useSelector(state=>state.skills.techSkills)


  useEffect(()=>{

    dispatch(setTechSkills(data))


  },[data, isLoading, dispatch])


  return (
    <div className={style.cardsCont}>
        {
            isLoading 
            ?
            (
                <Loader/>
            )
            :
            skills?.map((skill:techSkill, i:number)=>{
                return (
                    <TechCard key={i} name={skill.name} image={skill.image} yearExperience={skill.yearExperience} level={skill.level} type={skill.type}/>
                )
            })
        }
    </div>
  )
}

export default Cards 