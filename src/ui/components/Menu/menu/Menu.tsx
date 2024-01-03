"use client"
import React from 'react'
import style from "@/ui/styles/components/menu/menu.module.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import NavbarItemsMobile from '../../navbar/navItems/NavbarItemsMobile'

const Menu = ({navItems, setChecked}:any) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <aside className={style.menuCont}data-aos="fade-left">
      <NavbarItemsMobile navItems={navItems} setChecked={setChecked}/>
    </aside>
  )
}

export default Menu