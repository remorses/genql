import { TypeRenderer, typeRenderTestCase } from '../../testHelpers/render'
import { enumType } from './enumType'
import { objectType } from './objectType'
import { scalarType } from './scalarType'
import { unionType } from './unionType'

test('enumType', () => typeRenderTestCase(__dirname, 'enumType', <TypeRenderer>enumType, ['Enum', 'EnumD', 'EnumMD']))

test('unionType', () => typeRenderTestCase(__dirname, 'unionType', <TypeRenderer>unionType, ['Union', 'UnionD', 'UnionMD']))

test('scalarType', () =>
  typeRenderTestCase(__dirname, 'scalarType', <TypeRenderer>scalarType, [
    'Int',
    'Float',
    'String',
    'Boolean',
    'ID',
    'Custom',
    'CustomD',
    'CustomMD',
  ]))

test('objectType', () =>
  typeRenderTestCase(__dirname, 'objectType', <TypeRenderer>objectType, [
    'ObjectI',
    'ObjectF',
    'Object',
    'ObjectD',
    'ObjectMD',
  ]))

test('interfaceType', () =>
  typeRenderTestCase(__dirname, 'interfaceType', <TypeRenderer>objectType, [
    'InterfaceF',
    'Interface',
    'InterfaceD',
    'InterfaceMD',
  ]))
