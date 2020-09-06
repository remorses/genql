export function sortKeys(obj: Record<any, any>): Record<any, any> {
    obj = obj || {}
    const ordered = {}
    Object.keys(obj)
        .sort()
        // .reverse()
        .forEach(function(key) {
            ordered[key] = obj[key]
        })
    return ordered
}
