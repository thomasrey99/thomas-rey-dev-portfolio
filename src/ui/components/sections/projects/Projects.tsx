import style from "@/ui/styles/components/sections/projects/projects.module.scss"
import ProjectsCards from "../../projectsCards/ProjectsCards"

const Projects = () => {
  return (
    <section className={style.mainProjects} id="Projects">
        <h2 className={style.sectionTitle}><span className={style.index}>02</span> My projects</h2>
        <ProjectsCards/>
    </section>
  )
}

export default Projects