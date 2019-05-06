/**
 * 菜单的路由地址
 * @type {*[]}
 */

export const MenuRoute = [
  {
    path: '/menu/myM',
    name: '/MySpace/MyTask',
    component: resolve =>
      require(['@/components/Backstage/MySpace/MyTask'], resolve)
  }
]
