import { TypeRenderer, typeRenderTestCase } from '../../testHelpers/render'
import { inputObjectType } from './inputObjectType'
import { objectType } from './objectType'
import { unionType } from './unionType'

test('unionType', () => typeRenderTestCase(__dirname, 'unionType', <TypeRenderer>unionType, ['Union', 'UnionD', 'UnionMD']))

test('inputObjectType', () =>
  typeRenderTestCase(__dirname, 'inputObjectType', <TypeRenderer>inputObjectType, ['InputF', 'Input', 'InputD', 'InputMD']))

test('objectType', () =>
  typeRenderTestCase(__dirname, 'objectType', <TypeRenderer>objectType, ['Interface', 'Object', 'InterfaceField']))
