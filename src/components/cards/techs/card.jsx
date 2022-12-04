import * as React from 'react'
import { Link } from 'gatsby'
import TechLogo from '../../svgs/techLogo'
import { card, techName, techHomePage, techDescription, techIntLink } from './card.module.css'

const { technologies } = await import('../../../../DB/techs.js')


const TechCard = () => {
  return (
    <>
      {technologies.map((tech) => (
        <div className={card}>
          <TechLogo path={tech.svg.d} fill={tech.svg.fill} aria-labelledby={tech.svg.label} />
          <h2 className={techName}> {tech.name}</h2>
          <p className={techHomePage}>
            Домашняя страница: <a href={tech.homeLink.url}> {tech.homeLink.text} </a>
          </p>
          <p className={techDescription}> {tech.description}</p>
          <Link className={techIntLink} role="button" to={tech.intLink}>
            Перейти
          </Link>
        </div>
      ))}
    </>
  )
}

export default TechCard
