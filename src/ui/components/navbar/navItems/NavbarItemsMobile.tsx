"use client"
import React from 'react'
import style from "@/ui/styles/components/navbar/navItemsMobile.module.scss"
import { scrollToSection } from '@/utils/functions/scrollTo'

const NavbarItemsMobile = ({navItems, setChecked}:any) => {

  const handleOption=(section:string)=>{
    setChecked()
    scrollToSection(section)
  }

  return (
    <ul className={style.itemsCont}>
      {
        navItems?.map((item:string, i:number)=>{
          return (
            <li key={i} onClick={()=>handleOption(item)} className={style.item}><span className={style.span}>{i+1}</span> {item}</li>
          )
        })
      }
    </ul>
  )
}

export  default NavbarItemsMobile