import style from "@/ui/styles/components/sections/experience/experience.module.scss"
import ExperienceCardsCont from "../../experienceCardsCont/ExperienceCardsCont"

const Experience = () => {
  return (
    <section id='Experience' className={style.mainExperience}>
        <h2 className={style.sectionTitle}>
          <span className={style.index}>04</span> Experience
        </h2>
        <ExperienceCardsCont/>
    </section>
  )
}

export default Experience