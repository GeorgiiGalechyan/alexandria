import React from 'react'
import Svg from '../../SvgIcon/Svg'
import { Link } from 'gatsby'

import {
  card,
  logoAndTechNameContainer,
  cardTitle,
  techHomePage,
  techDescription,
  cardButton,
} from './TechCard.module.css'

const TechCard = ({ cards }) => {
  return (
    <>
      {Boolean(cards.length) &&
        cards.map((tech) => (
          <div key={tech.id} className={card}>
            <div className={logoAndTechNameContainer}>
              <Svg
                size={60}
                title={tech.SVG.title}
                label={tech.SVG.label}
                viewBox={tech.SVG.viewBox}
                d={tech.SVG.d}
                fill={tech.SVG.fill}
              />
              <h3 className={cardTitle}> {tech.SVG.title}</h3>
            </div>
            <address className={techHomePage}>
              Домашняя страница: <a href={tech.homeLink.url}> {tech.homeLink.text} </a>
            </address>
            <p className={techDescription}> {tech.description}</p>
            <button className={cardButton}>
              <Link className="gatsby-link" to={tech.intLink}>
                Перейти
              </Link>
            </button>
          </div>
        ))}
    </>
  )
}

export default TechCard
