import React from 'react'
import style from "@/ui/styles/components/sections/welcome/welcome.module.scss"
import Image from 'next/image'
import perfil from '@/assets/Captura desde 2023-12-22 20-30-26.png'
import Social from '../../socialNetworks/Social'
import DownloadButton from '../../downloadButton/DownloadButton'
const Welcome = () => {
  return (
    <section className={style.welcome}>

        <div className={style.description}>
            <div className={style.welcomeTextCont}>
                <p className={style.welcomeText}><span className={style.hi}>Hi</span><span className={style.hand}>👋</span>, my name is Thomas, I am</p>
            </div>
            <div className={style.waveTextCont}>
                <h2 className={style.border}>Full stack developer</h2>
                <h2 className={style.wave}>Full stack developer</h2>
            </div>
            <Social/>
            <DownloadButton/>
        </div>
        
    </section>
  )
}
export  default Welcome