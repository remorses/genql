import { PickByValue } from 'utility-types'

type Scalar = string | number | Date | boolean | null | undefined

type ScalarFields<T> = PickByValue<T, Scalar>

// SRC is the concrete type (for example Query), DST is the field selection, with shape { field: 1 | true, ... }
export type FieldsSelection<SRC extends Anify<DST>, DST> = {
    0: SRC
    1: Omit<ScalarFields<SRC>, '__scalar'> &
        Omit<ObjectFieldsSelection<SRC, DST>, '__scalar'>
    2: SRC extends {
        __resolve: infer RESOLVE
    }
        ? ObjectToUnion<FieldsSelection<RESOLVE, ValueToUnion<DST>>>
        : never
    3: MapInterface<SRC, DST>
    4: Omit<ObjectFieldsSelection<SRC, DST>, '__scalar'>
}[DST extends boolean | number // if the field is true or 1 then return its type
    ? 0
    : DST extends {
          __scalar: any
      }
    ? 1
    : SRC extends {
          __union: any
          __resolve: any
      }
    ? 2
    : SRC extends { __interface: any; __resolve: any }
    ? 3
    : 4]

// creates a sunset of the SRC type with only the DST selection fields
export type ObjectFieldsSelection<
    SRC extends Anify<DST>,
    DST
> = SRC extends undefined
    ? never // TODO this is to make SRC[k] work or  ObjectFieldsSelection<T | undefined> won't work, but doing so the field is no more optional
    : {
          [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
              ? LastFieldsSelectionSRCResolver<SRC[Key], PAYLOAD>
              : LastFieldsSelectionSRCResolver<SRC[Key], DST[Key]>
      }

export type MapInterface<SRC, DST> = SRC extends {
    __interface: infer INTERFACE
    __resolve: infer IMPLEMENTORS
}
    ? ObjectToUnion<
          Omit<
              {
                  [Key in keyof Omit<
                      DST,
                      keyof INTERFACE | '__typename'
                  >]: Key extends keyof IMPLEMENTORS
                      ? FieldsSelection<IMPLEMENTORS[Key], DST[Key]>
                      : never
              },
              keyof INTERFACE | '__typename'
          >
      >
    : never

export type ValueToUnion<T> = T extends {
    __typename?: infer R
}
    ? {
          [P in keyof Omit<T, '__typename'>]: T[P] & {
              __typename: R
          }
      }
    : T

export type ObjectToUnion<T> = {
    [P in keyof T]: T[P]
}[keyof T]

type Anify<T> = { [P in keyof T]?: any }

type LastFieldsSelectionSRCResolver<SRC, DST> = SRC extends undefined
    ? undefined
    : SRC extends Array<infer AR>
    ? LastFieldsSelectionSRCResolver<AR, DST>[]
    : SRC extends { __interface: any; __resolve: any }
    ? MapInterface<SRC, DST>
    : SRC extends { __union: any; __resolve: infer RESOLVE }
    ? ObjectToUnion<FieldsSelection<RESOLVE, ValueToUnion<DST>>>
    : DST extends boolean
    ? SRC
    : FieldsSelection<SRC, DST>
