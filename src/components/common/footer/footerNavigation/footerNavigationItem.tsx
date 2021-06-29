import * as React from "react"
import { Link } from "react-router-dom"
import style from './footerNavigation.scss'

type ITypes = {
  label: string,
  link: string
}

export const FooterNavigationItem = ({label, link}: ITypes) => {
  return(
    <Link to={link} className={style.footerLink}>{label}</Link>
  )
}