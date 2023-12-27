import React from 'react'
import style from "@/ui/styles/components/navbar/navItems.module.scss"

export const NavItems = ({navItems}:any) => {
  return (
    <ul className={style.ul}>
        {
            navItems.map((item:string, i:number)=>{
                return(
                    <li key={item} className={style.item}><span className={style.span}>0{i+1} </span>{item}</li>
                )
            })
        }
    </ul>
  )
}
