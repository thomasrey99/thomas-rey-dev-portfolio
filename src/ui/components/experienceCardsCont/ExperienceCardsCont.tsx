"use client"

import { experience } from "@/utils/types/types"
import { useGetExperienceQuery } from "@/libs/redux/services/experienceApi/experienceApi"
import { setExperiences } from "@/libs/redux/slices/experience/experienceSlice"
import { useDispatch, useSelector } from "@/libs/redux/hooks/reduxHooks"
import { useEffect } from "react"
import { ExperienceCard } from "../experienceCard/ExperienceCard"
import Loader from "../loader/Loader"
import style from "@/ui/styles/components/experienceCardsCont/experienceCardsCont.module.scss"
const ExperienceCardsCont = () => {

    const dispatch=useDispatch()

    const allExperience=useSelector((state)=>state.experiences.allExperience)

    const {data, isLoading}=useGetExperienceQuery(null)

    useEffect(()=>{

        dispatch(setExperiences(data))

    }, [data, dispatch])


    console.log(allExperience)

  return (
    <div className={style.cardsCont}>
        {
            isLoading
            ?
            (
                <Loader/>
            )
            :
            allExperience?.map((experience:experience, i:number)=>{
                return (
                    <ExperienceCard key={i} name={experience.name} company={experience.company} end_date={experience.end_date} start_date={experience.start_date} image={experience.image} description={experience.description}/>
                )
            })
        }
    </div>
  )
}

export default ExperienceCardsCont