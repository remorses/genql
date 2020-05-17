import { chain } from '../chain'

describe('chain', () => {
  test('convert deep scalar query', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path.to.scalar.get()

    expect(onExecute.mock.calls[0]).toEqual([['path', 'to', 'scalar'], { path: { to: { scalar: 1 } } }, undefined])
  })

  test('convert deep scalar query with default value', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path.to.scalar.get(1, 'defaultValue')

    expect(onExecute.mock.calls[0]).toEqual([['path', 'to', 'scalar'], { path: { to: { scalar: 1 } } }, 'defaultValue'])
  })

  test('convert deep scalar query with args', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path
      .to({ id: 'ID' })
      .scalar({ id: 'ID' })
      .get()

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'scalar'],
      { path: { to: [{ id: 'ID' }, { scalar: [{ id: 'ID' }] }] } },
      undefined,
    ])
  })

  test('convert deep scalar query with args and default value', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path
      .to({ id: 'ID' })
      .scalar({ id: 'ID' })
      .get(1, 'defaultValue')

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'scalar'],
      { path: { to: [{ id: 'ID' }, { scalar: [{ id: 'ID' }] }] } },
      'defaultValue',
    ])
  })

  test('convert deep object query', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path.to.object.get({ some: 1, other: 1 })

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'object'],
      { path: { to: { object: { some: 1, other: 1 } } } },
      undefined,
    ])
  })

  test('convert deep object query with default value', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path.to.object.get({ some: 1, other: 1 }, 'defaultValue')

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'object'],
      { path: { to: { object: { some: 1, other: 1 } } } },
      'defaultValue',
    ])
  })

  test('convert deep object query with args', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path
      .to({ id: 'ID' })
      .object({ id: 'ID' })
      .get({ some: 1, other: 1 })

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'object'],
      { path: { to: [{ id: 'ID' }, { object: [{ id: 'ID' }, { some: 1, other: 1 }] }] } },
      undefined,
    ])
  })

  test('convert deep object query with args and default value', () => {
    const onExecute = jest.fn()
    const c = chain(onExecute)

    c.path
      .to({ id: 'ID' })
      .object({ id: 'ID' })
      .get({ some: 1, other: 1 }, 'defaultValue')

    expect(onExecute.mock.calls[0]).toEqual([
      ['path', 'to', 'object'],
      { path: { to: [{ id: 'ID' }, { object: [{ id: 'ID' }, { some: 1, other: 1 }] }] } },
      'defaultValue',
    ])
  })

  test('throw on invalid chain prop access', () => {
    const c = chain(() => {})

    expect(() => c.path.to[Symbol()]).toThrow('property is not a string')
  })
})
