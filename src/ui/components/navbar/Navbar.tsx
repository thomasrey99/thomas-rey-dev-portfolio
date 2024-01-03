"use client"
import style from "@/ui/styles/components/navbar/navbar.module.scss"
import ProgressBar from "../progressBar/ProgressBar"
import { NavItems } from './navItems/NavItems';
import Image from "next/image";
import logo from "@/assets/thomasDevLog.svg"
import { useMediaQuery } from '@react-hook/media-query'
import ToggleMenu from "../Menu/toggle/ToggleMenu";

const Navbar = () => {

    const mobile = useMediaQuery('(max-width: 768px)');

    const navItems=["About", "Projects", "Skills", "Experience", "Education"]

  return (
    <nav className={style.navbarCont}>
        <div className={style.logoCont}>
          <Image src={logo} alt="thomas rey logo" className={style.logo}/>
        </div>
        {
          mobile ? <ToggleMenu navItems={navItems}/> : <NavItems navItems={navItems}/>
        }
        <ProgressBar/>
    </nav>
  )
}

export default Navbar