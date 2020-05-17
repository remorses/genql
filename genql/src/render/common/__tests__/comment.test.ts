import { stripIndent } from 'common-tags'

import { comment } from '../comment'

export const stripAndWrap = (tsa: TemplateStringsArray) => `\n${stripIndent(tsa)}\n`

test('deprecated', () => {
  expect(comment({ deprecated: 'deprecation reason' })).toBe(stripAndWrap`
    /** @deprecated deprecation reason */
  `)
})

test('deprecated multiline', () => {
  expect(comment({ deprecated: 'deprecation\nreason\nmultiline' })).toBe(stripAndWrap`
    /** @deprecated deprecation reason multiline */
  `)
})

test('single line', () => {
  expect(comment({ text: 'single line' })).toBe(stripAndWrap`
    /** single line */
    `)
})

test('single line deprecated', () => {
  expect(comment({ text: 'single line', deprecated: 'deprecation reason' })).toBe(stripAndWrap`
    /**
     * @deprecated deprecation reason
     * single line
     */
  `)
})

test('multiline', () => {
  expect(comment({ text: 'multiline\ntext' })).toBe(stripAndWrap`
    /**
     * multiline
     * text
     */
  `)
})

test('multiline deprecated', () => {
  expect(comment({ text: 'multiline\ntext', deprecated: 'deprecation reason' })).toBe(stripAndWrap`
    /**
     * @deprecated deprecation reason
     * multiline
     * text
     */
  `)
})
