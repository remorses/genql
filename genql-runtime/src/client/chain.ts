interface Chain {
  (): void
  path: string[][]
}

const newChain = (path: string[][] = []) => {
  const chain = <Chain>(() => {})
  chain.path = path
  return chain
}

const pathToRequest = (path: string[][], executeFields: any): any => {
  if (path.length === 0) return undefined

  const [[field, arg], ...rest] = path

  const nextFields = pathToRequest(rest, executeFields) || executeFields

  return {
    [field]: arg
      ? nextFields && typeof nextFields !== 'boolean' && typeof nextFields !== 'number'
        ? [arg, nextFields]
        : [arg]
      : nextFields
      ? nextFields
      : 1,
  }
}

const wrapInProxy = (chain: Chain, onExecute: (path: string[], request: any, defaultValue: any) => any): any =>
  new Proxy(chain, {
    get(target, prop) {
      if (typeof prop !== 'string') throw new Error('property is not a string')

      if (prop === 'get') {
        return (fields: any, defaultValue: any) =>
          onExecute(target.path.map(i => i[0]), pathToRequest(target.path, fields), defaultValue)
      } else {
        const newPath = [...target.path, [prop]]
        return wrapInProxy(newChain(newPath), onExecute)
      }
    },
    apply(target, _, argArray) {
      const newPath = [...target.path.slice(0, -1), [target.path[target.path.length - 1][0], argArray[0]]]
      return wrapInProxy(newChain(newPath), onExecute)
    },
  })

export const chain = (onExecute: (path: string[], request: any, defaultValue: any) => any) =>
  wrapInProxy(newChain(), onExecute)
