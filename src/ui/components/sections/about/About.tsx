import style from "@/ui/styles/components/sections/about/about.module.scss"
import perfil from '@/assets/Captura desde 2023-12-22 20-30-26.png'
import Image from "next/image"

export const About = () => {
  return (
    <section className={style.mainAbout} id="About">
        <h2 className={style.sectionTitle}>About me</h2>
        <Image src={perfil} alt="thomas rey" width={200} height={200} className={style.img}/>
        <div className={style.aboutTextCont}>
            <p className={style.paragraph}>
                Hi, my name is Thomas Rey, I&apos;m a passionate Full Stack Web Developer with expertise in JavaScript and TypeScript, focusing on creating dynamic web experiences. I specialize in front-end frameworks like React.js, Vite.js, and Next.js, leveraging tools like Redux Toolkit for efficient development. Proficient in CSS preprocessors (Sass, Less) and styling frameworks (Bootstrap, Tailwind), I craft intuitive interfaces. In the back-end, I excel in SQL database management (PostgreSQL, Sequelize) and building robust systems with Node.js and Express. I&apos;ve actively contributed to academic projects, notably a food e-commerce project turned real, enhancing teamwork, leadership, and quick tech adaptation skills. I&apos;m decisive, curious, and thrive on learning new technologies. Seeking challenging projects that demand creativity, innovation, and technical excellence. Let&apos;s create something amazing together!
            </p>
        </div>
    </section>
  )
}
