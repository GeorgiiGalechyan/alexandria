import * as React from 'react'
import { Link } from 'gatsby'
import { card, cardIcon, cardTitle, cardDescription } from './card.module.css'

const technologies = [
  {
    title: 'Node.js',
    home: {
      url: 'https://nodejs.org/dist/latest-v18.x/docs/api/',
      title: 'nodejs.org',
    },
    intLink: '',
    description:
      "Node.js - это кроссплатформенная событийная (event-driven) асинхронная среда выполнения JavaScript, построенная на движке Chrome' V8.",
    img: {
      alt: 'Node.js_icon',
      src: '../../../svg/nodejs.svg',
      color: '#339933',
    },
  },
  {
    title: 'Fastify',
    home: {
      url: 'https://www.fastify.io/',
      title: 'fastify.io',
    },
    intLink: '',
    description:
      'Fastify - это веб-фреймворк, ориентированный на предоставление наилучших возможностей для разработчиков при минимальных затратах.',
    img: {
      alt: 'Fastify_icon',
      src: '../../../svg/fastify.svg',
      color: '#000000',
    },
  },
]

const TechCard = () => {
  return (
    <>
      {technologies.map((tech) => (
        <div className={card}>
          {/* {<object style={{ ...cardIcon, fill: tech.img.color }} type="image/svg+xml" data={tech.img.src}></object>} */}

          <h2 className={cardTitle}> {tech.title}</h2>
          <p>
            Домашняя страница: <a href={tech.home.url}> {tech.home.title} </a>
          </p>
          <p className={cardDescription}> {tech.description}</p>
          <Link to={tech.intLink}> Перейти </Link>
        </div>
      ))}
    </>
  )
}

export default TechCard
