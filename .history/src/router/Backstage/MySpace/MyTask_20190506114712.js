/**
 * 我的任务的路由地址
 * @type {*[]}
 */

export const FireRoute = [
  {
    path: '/MySpace/MyTask',
    name: '/MySpace/MyTask',
    component: resolve => require(['@/components/Backstage//MySpace/MyTask'], resolve)
  }
]
