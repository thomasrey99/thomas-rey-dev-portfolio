import style from "@/ui/styles/components/sections/about/about.module.scss";
import Image from "next/image";
import pro from "@/assets/pro.png";

export const About = () => {
  return (
    <section className={style.mainAbout} id="About">
      <h2 className={style.sectionTitle}>
        <span className={style.index}>01</span> About me
      </h2>
      <div className={style.aboutSection}>
        <Image src={pro} alt="programmer" width={250} height={250} className={style.img} />
        <div className={style.aboutTextCont}>
          <p className={style.paragraph}>
            Hi! I&apos;m Thomas Rey, a Full Stack Web Developer specialized in JavaScript and TypeScript. I&apos;m in charge of creating dynamic web experiences, using React.js, Vite.js, and Next.js on the front-end, and Node.js and Express on the back-end. I manage SQL databases such as PostgreSQL and Sequelize, in addition to working with tools such as Redux Toolkit, Sass, Less, Bootstrap, and Tailwind for intuitive interfaces. I have led academic projects, including one that became a real business, which has developed my skills in teamwork, leadership, and rapid adaptation to technology. I am determined, curious, and always ready to learn new technologies. I look for challenging projects that require creativity, innovation, and technical excellence. I&apos;m excited to create something amazing with you!
          </p>
        </div>
      </div>
    </section>
  );
};
