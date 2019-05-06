/**
 * 菜单的路由地址
 * @type {*[]}
 */

export const MenuRoute = [
  {
    path: '/menu/menu',
    name: '/menu/menu',
    component: resolve =>
      require(['@/components/Backstage/MySpace/MyTask'], resolve)
  }
]
