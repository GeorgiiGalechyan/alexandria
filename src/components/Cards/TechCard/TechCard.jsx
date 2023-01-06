import * as React from 'react'
import { Link } from 'gatsby'
// import TechLogo from '../../Logo/techLogo'
import { techSvgsArr, techSvgsObj } from '../../../assets/data/svgs/svgData.js'

import {
  techCard,
  logoAndTechNameContainer,
  techName,
  techHomePage,
  techDescription,
  button,
} from './TechCard.module.css'

import { techCardsData } from '../../../assets/data/cards/techCardsData.js'

const TechCard = () => {
  return (
    <>
      {techCardsData.map((tech) => (
        <div key={tech.id} className={techCard}>
          <div className={logoAndTechNameContainer}>
            {tech.SVG}
            {/* {<TechLogo d={tech.svg.d} fill={tech.svg.fill} aria-labelledby={tech.svg.label} title={tech.svg.title} />} */}
            <h2 className={techName}> {tech.techName}</h2>
          </div>
          <address className={techHomePage}>
            Домашняя страница: <a href={tech.homeLink.url}> {tech.homeLink.text} </a>
          </address>
          <p className={techDescription}> {tech.description}</p>
          <Link className={button} role="button" to={tech.intLink}>
            Перейти
          </Link>
          {techSvgsArr[0]}
          {techSvgsObj.nodejs}
        </div>
      ))}
    </>
  )
}

export default TechCard
