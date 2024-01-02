import React from 'react'
import style from "@/ui/styles/components/sections/welcome/welcome.module.scss"
import Social from '../../socialNetworks/Social'
import DownloadButton from '../../downloadButton/DownloadButton'
import AboutMeButton from '../../aboutMebutton/AboutMeButton'
import Image from "next/image"
import profile from "@/assets/profile.png"
const Welcome = () => {
  return (
    <section className={style.welcome}>
        <Image src={profile} alt="thomas rey" width={200} height={200} className={style.img}/>
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
            <AboutMeButton/>
        </div>
        
    </section>
  )
}
export  default Welcome