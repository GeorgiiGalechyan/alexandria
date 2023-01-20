import { SVGs } from '../svgs/svgData.js'

const cardsData = [
  {
    // Node.js
    id: '001',
    SVG: SVGs.nodejs,
    homeLink: {
      url: 'https://nodejs.org/dist/latest-v18.x/docs/api/',
      text: 'nodejs.org',
    },
    description:
      "Node.js - это кроссплатформенная событийная (event-driven) асинхронная среда выполнения JavaScript, построенная на движке Chrome' V8.",
    intLink: './techs/nodejs',
  },
  {
    // Fastify
    id: '002',
    SVG: SVGs.fastify,
    homeLink: {
      url: 'https://www.fastify.io/',
      text: 'fastify.io',
    },
    description:
      'Fastify - это веб-фреймворк, ориентированный на предоставление наилучших возможностей для разработчиков при минимальных затратах.',
    intLink: './techs/fastify',
  },
  {
    // TypeScript
    id: '003',
    SVG: SVGs.typescript,
    homeLink: {
      url: 'https://www.fastify.io/',
      text: 'fastify.io',
    },
    description:
      'Fastify - это веб-фреймворк, ориентированный на предоставление наилучших возможностей для разработчиков при минимальных затратах.',
    intLink: './techs/fastify',
  },
]

export default cardsData
