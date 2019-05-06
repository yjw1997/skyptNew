/**
 * 消防管理的路由地址
 * @type {*[]}
 */

export const MyTaskRoute = [
  {
    path: '/Fire/LeftPanel',
    name: '/Fire/LeftPanel',
    component: resolve => require(['@/components/Fire/LeftPanel'], resolve)
  },
  {
    path: '/Fire/RightPanel',
    name: '/Fire/RightPanel',
    component: resolve => require(['@/components/Fire/RightPanel'], resolve)
  },
]