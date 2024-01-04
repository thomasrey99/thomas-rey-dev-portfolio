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
            Hi! I&apos;m Thomas Rey, a Full Stack Web Developer specialized in <span className={style.span}>Javascript</span> and <span className={style.span}>TypeScript</span>. I&apos;m in charge of creating dynamic web experiences, using <span className={style.span}>React.js</span>, <span className={style.span}>Vite.js</span>, and <span className={style.span}>Next.js</span> on the front-end, and <span className={style.span}>Node.js</span> and <span className={style.span}>Express</span> on the back-end. I manage SQL databases such as <span className={style.span}>PostgreSQL</span> and <span className={style.span}>Sequelize</span>, in addition to working with tools such as <span className={style.span}>Redux Toolkit</span>, <span className={style.span}>Sass</span>, <span className={style.span}>Less</span>, <span className={style.span}>Bootstrap</span>, and <span className={style.span}>Tailwind</span> for intuitive interfaces. I have led academic projects, including one that became a real business, which has developed my skills in <span className={style.span}>teamwork</span>, <span className={style.span}>leadership</span>, and rapid adaptation to technology. I am <span className={style.span}>determined</span>, <span className={style.span}>curious</span>, and always ready to learn new technologies. I look for challenging projects that require <span className={style.span}>creativity</span>, <span className={style.span}>innovation</span>, and <span className={style.span}>technical excellence</span>. I&apos;m excited to create something amazing with you!
          </p>
        </div>
      </div>
    </section>
  );
};
