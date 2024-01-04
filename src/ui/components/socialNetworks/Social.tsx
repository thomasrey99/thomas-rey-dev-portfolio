"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareTwitter, faSquareInstagram, faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import style from "@/ui/styles/components/socialNetworks/socials.module.scss"
import Link from "next/link"

const Social = () => {

  const email="thomas_rey1999@outlook.com"

  const socials:Array<Object>=[
    {
        name:"twitter",
        img:faSquareTwitter,
        url:"#"
    },
    {
        name:"instagram",
        img: faSquareInstagram,
        url:"https://www.instagram.com/thomas_leonel_rey"
    },
    {
        name:"Git Hub",
        img:faGithub,
        url:"https://github.com/thomasrey99"
    },
    {
        name:"Linkedin",
        img:faLinkedin,
        url:"https://www.linkedin.com/in/thomas-rey-39099021b"
    },
    {  
        name:"Email",
        img:faEnvelope,
        url:`mailto:${email}`
    }
  ]

  return (
    <aside className={style.socialsCont}>
        {
            socials?.map((icon:any)=>{
                return(
                    <div key={icon.name} className={style.iconCont}>
                        <Link href={icon.url} target="blank" className={style.link}><FontAwesomeIcon icon={icon.img} className={style.socialIcon}/></Link>
                    </div>
                )
            })
        }
    </aside>
  )
}
 export default Social