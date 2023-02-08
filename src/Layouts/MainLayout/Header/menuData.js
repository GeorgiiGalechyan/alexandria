export let headerMenuData = [
  {
    id: 'techs_menu_item',
    title: 'Технологии',
    url: '/techs',
    submenu: [
      {
        id: 'techs_nodejs',
        title: 'NodeJS',
        url: '/techs/nodejs',
        info: 'Серверная среда выполнения JS',
        color: '#bb2649',
      },
      {
        id: 'techs_fastify',
        title: 'Fastify',
        url: '/techs/fastify',
        info: 'Самый быстрый фреймворк для NodeJS',
        color: '#26bb98',
      },
      {
        id: 'techs_typescript',
        title: 'TypeScript',
        url: '/techs/typescript',
        info: 'Cтатическая типизация для разработки на JS',
        color: '#bb2649',
      },
    ],
  },
  { id: 'about_menu_item', title: 'О проекте', url: '/about', submenu: false },
  { id: 'blog_menu_item', title: 'Блог', url: '/blog', submenu: false },
]