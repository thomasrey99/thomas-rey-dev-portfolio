"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from '@/libs/redux/hooks/reduxHooks'
import { useGetProjectsQuery } from '@/libs/redux/services/projectsApi/projectsApi'
import { setProjects } from "@/libs/redux/slices/projects/projectsSlice"
import Loader from '../loader/Loader'
import { ProjectCard } from '../projectCard/ProjectCard'
import style from "@/ui/styles/components/projectsCardsCont/ProjectsCardsCont.module.scss"
import { project } from '@/utils/types/types'

const ProjectsCards = () => {

  const dispatch=useDispatch()

  const {data, isLoading}=useGetProjectsQuery(null)

  const projects=useSelector((state)=>state.projects.allProjects)

  useEffect(()=>{

    dispatch(setProjects(data))

  }, [data, isLoading, dispatch])


  return (
    <div className={style.projectsCardsCont}>
        {
          isLoading ?
          (
            <Loader/>
          )
          :
          projects?.map((project:project, i)=>{
            return (
              <ProjectCard key={i} name={project.name} description={project.description} rol={project.rol} technologies={project.technologies} repositoryURL={project.repositoryURL} deployURL={project.deployURL} imageURL={project.imageURL}/>
            )
          })
        }
    </div>
  )
}

export default ProjectsCards