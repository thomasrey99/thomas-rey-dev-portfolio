import style from "@/ui/styles/components/sections/mySkills/skills.module.scss"
import Cards from "../../techCardsCont/Cards"

const Skills = () => {
  return (
    <section className={style.mainSkills} id="Skills">
        <h2 className={style.sectionTitle}><span className={style.index}>02</span> My skills</h2>
        <Cards/>
    </section>
  )
}
export default Skills