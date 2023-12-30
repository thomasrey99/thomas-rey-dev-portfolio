import React from 'react'
import style from "@/ui/styles/components/toggleMenu/toggleMenu.module.scss"

const ToggleMenu = () => {
  return (
    <div className={style.toggleCont}>
         <input type="checkbox" id={style.checkbox}/>
         <label htmlFor={style.checkbox} className={style.toggle}>
            <div className={style.bars} id={style.bar1}></div>
            <div className={style.bars} id={style.bar2}></div>
            <div className={style.bars} id={style.bar3}></div>
         </label>
    </div>
  )
}
export default ToggleMenu