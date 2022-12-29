import * as React from 'react'
import { Link } from 'gatsby'
import TechLogo from '../../logo/techLogo'
import { card, logoNameContainer, techName, techHomePage, techDescription, button } from './card.module.css'
import { techCardsData } from '../../../assets/data/cards/techCardsData.js'

const TechCard = () => {
  return (
    <>
      {techCardsData.map((tech) => (
        <div key={tech.id} className={card}>
          <div className={logoNameContainer}>
            <TechLogo d={tech.svg.d} fill={tech.svg.fill} aria-labelledby={tech.svg.label} title={tech.svg.title} />
            <h2 className={techName}> {tech.name}</h2>
          </div>
          <p className={techHomePage}>
            Домашняя страница: <a href={tech.homeLink.url}> {tech.homeLink.text} </a>
          </p>
          <p className={techDescription}> {tech.description}</p>
          <Link className={button} role="button" to={tech.intLink}>
            Перейти
          </Link>
        </div>
      ))}
    </>
  )
}

export default TechCard
