import styles from '@/ui/styles/page.module.scss'
import Welcome from '@/ui/components/sections/welcome/Welcome'
import { About } from '@/ui/components/sections/about/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome/>
      <About/>
    </main>
  )
}
