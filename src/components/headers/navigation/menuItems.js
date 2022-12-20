export const headerMenuItems = [
  {
    id: '001',
    title: 'Технологии',
    url: '/techs',
    submenu: [
      {
        id: '001',
        title: 'NodeJS',
        url: '/techs/nodejs',
        info: 'Серверная среда выполнения JS',
        color: '#bb2649',
      },
      {
        id: '002',
        title: 'Fastify',
        url: '/techs/fastify',
        info: 'Самый быстрый фреймворк для NodeJS',
        color: '#26bb98',
      },
      {
        id: '002',
        title: 'TypeScript',
        url: '/techs/typescript',
        info: 'Cтатическая типизация для разработки на JS',
        color: '#bb2649',
      },
    ],
  },
  { id: '002', title: 'О проекте', url: '/about', submenu: false },
]
