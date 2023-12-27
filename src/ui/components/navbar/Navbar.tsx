import style from "@/ui/styles/components/navbar/navbar.module.scss"
import ProgressBar from "../progressBar/ProgressBar"
import { NavItems } from './navItems/NavItems';


const Navbar = () => {

    const navItems=["About","Skills", "Projects", "Experience"]

  return (
    <nav className={style.navbarCont}>
        <NavItems navItems={navItems}/>
        <ProgressBar/>
    </nav>
  )
}

export default Navbar