import * as React from 'react'
import { Link } from 'gatsby'
import TechLogo from '../../logo/techLogo'
import { card, logoNameContainer, techName, techHomePage, techDescription, techIntLink } from './card.module.css'

import { technologies } from '../../../../DB/techs.js'

const TechCard = () => {
  return (
    <>
      {technologies.map((tech) => (
        <div key={tech.id} className={card}>
          <div className={logoNameContainer}>
            <TechLogo d={tech.svg.d} fill={tech.svg.fill} aria-labelledby={tech.svg.label} title={tech.svg.title} />
            <h2 className={techName}> {tech.name}</h2>
          </div>
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
