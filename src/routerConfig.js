/* eslint-disable */
// 工具
import Bankcard from './pages/Bankcard'
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称
// 备注 ice 自动添加的路由记录是以下格式
// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: 4
// }
// 如果不指定 name 字段，会根据 path 生成 name = pages-demo1
// 转换规则见 util.recursiveRouterConfig 中 path2name 方法
// meta 字段会和默认值使用 Object.assign 合并
// 如果不指定 meta.name 的话，name 字段会使用和上面路由 name 一样的取值逻辑
// 下面两个页面就是对比 你可以分别观察两个页面上显示的路由数据差异

const routerConfig = [
    // 首页 必须 name:index
    {
        path: '/bankcard',
        name: 'bankcard',
        component: Bankcard,
        meta: {
            cache: true,
            requiresAuth: true,
            title: ' 彩店银行卡',
        }
    }
]
// / 不参与菜单显示的
// ice 不会处理这部分
// 但是这部分路由也会被注册
// 处理规则同 routerConfig

const routerConfigMenuOut = [
    {
        path: '*',
        component: Error404,
    },
] // 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理

export default util.recursiveRouterConfig([
    ...routerConfig,
    ...routerConfigMenuOut,
]) // 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用

export const frameInRoutes = util.recursiveRouterConfig(routerConfig).map(e => {
    const route = e.children ? e.children[0] : e
    return {
        path: e.path,
        name: route.name,
        hidden: route.hidden,
        meta: route.meta,
    }
})
