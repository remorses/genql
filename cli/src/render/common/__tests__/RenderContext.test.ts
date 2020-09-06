import { prettify } from '../../../helpers/prettify'
import { RenderContext } from '../RenderContext'

describe('RenderContext', () => {
  test('prettify', () => {
    const ctx = new RenderContext()
    ctx.addCodeBlock('interface A{}')
    expect(ctx.toCode('typescript', true)).toBe(prettify(`interface A{}`, 'typescript'))
  })

  test('raw', () => {
    const ctx = new RenderContext()
    ctx.addCodeBlock('raw string')
    expect(ctx.toCode()).toBe('raw string')
  })
})
