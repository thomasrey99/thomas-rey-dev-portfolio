import React from 'react'
import style from "@/ui/styles/components/footer/footer.module.scss"
import Social from '../socialNetworks/Social'

const Footer = () => {
  return (
    <footer className={style.footerCont}>
      <div className={style.socialsCont}>
        <Social/>
      </div>
      <h5 className={style.copyright}>© 2024 Thomas Rey. All rights reserved.</h5>
    </footer>
  )
}

export default Footer