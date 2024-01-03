"use client"
import React from 'react'
import style from "@/ui/styles/components/navbar/navItems.module.scss"
import { scrollToSection } from '@/utils/functions/scrollTo'

export const NavItems = ({navItems}:any) => {
  return (
    <ul className={style.ul}>
        {
            navItems.map((item:string, i:number)=>{
                return(
                    <li key={item} className={style.item} onClick={()=>scrollToSection(item)}><span className={style.span}>0{i+1} </span>{item}</li>
                )
            })
        }
        {/*<li  onClick={()=>scrollToSection("Contact")} className={style.button}>Contact</li>
        <li className={style.button}>Blog</li>*/}
    </ul>
  )
}
