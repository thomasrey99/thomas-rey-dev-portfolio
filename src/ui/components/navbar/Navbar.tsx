import style from "@/ui/styles/components/navbar/navbar.module.scss"
import ProgressBar from "../progressBar/ProgressBar"
import { NavItems } from './navItems/NavItems';
import Image from "next/image";
import logo from "@/assets/thomasDevLog.svg"

const Navbar = () => {

    const navItems=["About","Skills", "Projects", "Experience"]

  return (
    <nav className={style.navbarCont}>
        <div className={style.logoCont}>
          <Image src={logo} alt="thomas rey logo" className={style.logo}/>
        </div>
        <NavItems navItems={navItems}/>
        <ProgressBar/>
    </nav>
  )
}

export default Navbar