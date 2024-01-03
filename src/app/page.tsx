import styles from '@/ui/styles/page.module.scss'
import Welcome from '@/ui/components/sections/welcome/Welcome'
import { About } from '@/ui/components/sections/about/About'
import Skills from '@/ui/components/sections/mySkills/Skills'
import AudioToggle from '@/ui/components/audioToggle/AudioToggle'
import Projects from '@/ui/components/sections/projects/Projects'

export default function Home() {
  return (
    <main className={styles.main}>
      <AudioToggle/>
      <Welcome/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  )
}
