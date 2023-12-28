"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareTwitter, faSquareInstagram, faLinkedin, faGithub,} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import style from "@/ui/styles/components/socialNetworks/socials.module.scss"

const Social = () => {

  const socials:Array<Object>=[
    {
        name:"twitter",
        img:faSquareTwitter
    },
    {
        name:"instagram",
        img: faSquareInstagram
    },
    {
        name:"Git Hub",
        img:faGithub
    },
    {
        name:"Linkedin",
        img:faLinkedin
    },
    {  
        name:"Email",
        img:faEnvelope
    }
  ]

  return (
    <aside className={style.socialsCont}>
        {
            socials?.map((icon:any)=>{
                return(
                    <div key={icon.name} className={style.iconCont}>
                        <FontAwesomeIcon icon={icon.img} className={style.socialIcon}/>
                    </div>
                )
            })
        }
    </aside>
  )
}
 export default Social