import { camelCase } from './utils'

test('camelCase keeps leading _', () => {
    expect(camelCase('some_type')).toBe('someType')
    expect(camelCase('some-type')).toBe('someType')
    expect(camelCase('_test')).toBe('_test')
    expect(camelCase('__test')).toBe('__test')
    expect(camelCase('some-test_')).toBe('someTest_')
    expect(camelCase('some-test__')).toBe('someTest__')
})
