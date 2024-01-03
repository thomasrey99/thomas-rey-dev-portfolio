"use client"
import React, { useEffect } from 'react'
import style from "@/ui/styles/components/menu/toggleMenu.module.scss"
import { useState } from 'react'
import Menu from '../menu/Menu'

const ToggleMenu = ({navItems}:any) => {

  const [checked, setChecked]=useState(false)

  const handleChecked=()=>{
    setChecked(!checked)
  }

  

  return (
    <>
      <div className={style.toggleCont}>
          <input type="checkbox" id={style.checkbox} checked={checked}/>
          <label htmlFor={style.checkbox} className={style.toggle} onClick={handleChecked}>
              <div className={style.bars} id={style.bar1}></div>
              <div className={style.bars} id={style.bar2}></div>
              <div className={style.bars} id={style.bar3}></div>
          </label>
      </div>
      {
        checked&&<Menu navItems={navItems} setChecked={handleChecked}/>
      }
    </>
  )
}
export default ToggleMenu