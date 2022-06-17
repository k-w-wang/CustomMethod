
//  递归方法
export const nestedToFlat: (arr: any[], pId?: number | string, pKey?: string, childKey?: any) => any[] = (arr, pId = 0, pKey = "id", childKey = "children") => {
    return [].concat(...arr.map(item => {
        const temp = JSON.parse(JSON.stringify(item[childKey]))
        delete item[childKey]
        return [].concat({ ...item, pId }, ...nestedToFlat(temp, item[pKey], pKey, childKey))
    }))
}
// 作者：莫憾生
// 链接：https://juejin.cn/post/7109760886717284389
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。