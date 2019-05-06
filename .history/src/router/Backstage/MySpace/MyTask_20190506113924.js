/**
 * 消防管理的路由地址
 * @type {*[]}
 */

export const FireRoute = [
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
  {
    path: '/Fire/FireDevice/RightPanel',
    name: '/Fire/FireDevice/RightPanel',
    component: resolve => require(['@/components/Fire/FireDevice/RightPanel'], resolve)
  },
  {
    path: '/Fire/FireDevice/dialog',
    name: '/Fire/FireDevice/dialog',
    component: resolve => require(['@/components/Fire/FireDevice/dialog'], resolve)
  },
  {
    path: '/Fire/FirePolling/RightPanel',
    name: '/Fire/FirePolling/RightPanel',
    component: resolve => require(['@/components/Fire/FirePolling/RightPanel'], resolve)
  },
  {
    path: '/Fire/FirePolling/dialog',
    name: '/Fire/FirePolling/dialog',
    component: resolve => require(['@/components/Fire/FirePolling/dialog'], resolve)
  },
  {
    path: '/Fire/FireMonitor/RightPanel',
    name: '/Fire/FireMonitor/RightPanel',
    component: resolve => require(['@/components/Fire/FireMonitor/RightPanel'], resolve)
  },
  {
    path: '/Fire/EmergencyLinkage/RightPanel',
    name: '/Fire/EmergencyLinkage/RightPanel',
    component: resolve => require(['@/components/Fire/EmergencyLinkage/RightPanel'], resolve)
  }
]
