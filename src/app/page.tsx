import Image from 'next/image'
import styles from '@/ui/styles/page.module.scss'
import Navbar from '@/ui/components/navbar/Navbar'
import Welcome from '@/ui/components/sections/welcome/Welcome'

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome/>
    </main>
  )
}
