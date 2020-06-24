import { PickByValue } from 'utility-types'

type Scalar = string | number | Date | boolean | null | undefined

type ScalarFields<T> = PickByValue<T, Scalar>

export type FieldsSelection<SRC extends Anify<DST>, DST> = DST extends never
    ? never
    : DST extends Scalar
    ? SRC
    : Anify<Omit<DST, '__typename'>> extends Anify<NonNullable<SRC>>
    ? Pick<SRC, keyof DST>
    : SRC

//////////////////////////////////////////////////

// SRC is the concrete type (for example Query), DST is the field selection, with shape { field: 1 | true, ... }
// TODO this is too complex, apply a selection only on the top level fields and leave the rest, unions are just type unions, interfaces are just simple types
export type _FieldsSelection<SRC extends Anify<DST>, DST> = {
    0: SRC
    1: Omit<ScalarFields<SRC>, '__scalar'> &
        Omit<Object_FieldsSelection<SRC, DST>, '__scalar'>
    2: SRC extends {
        __resolve: infer RESOLVE
    }
        ? ObjectToUnion<_FieldsSelection<RESOLVE, ValueToUnion<DST>>>
        : never
    3: MapInterface<SRC, DST>
    4: Omit<Object_FieldsSelection<SRC, DST>, '__scalar'>
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
export type Object_FieldsSelection<
    SRC extends Anify<DST>,
    DST
> = SRC extends undefined
    ? never // TODO this is to make SRC[k] work or  Object_FieldsSelection<T | undefined> won't work, but doing so the field is no more optional
    : {
          [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
              ? Last_FieldsSelectionSRCResolver<SRC[Key], PAYLOAD>
              : Last_FieldsSelectionSRCResolver<SRC[Key], DST[Key]>
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
                  >]: Key extends keyof IMPLEMENTORS // add the on_ fields types fo every interface used
                      ? _FieldsSelection<IMPLEMENTORS[Key], DST[Key]> &
                            // add the other fields outside the on_
                            Omit<
                                {
                                    [Key in keyof Omit<
                                        DST,
                                        keyof IMPLEMENTORS | '__typename'
                                    >]: Key extends keyof INTERFACE
                                        ? Last_FieldsSelectionSRCResolver<
                                              INTERFACE[Key],
                                              DST[Key]
                                          >
                                        : never
                                },
                                keyof IMPLEMENTORS
                            > &
                            // add the __typename field
                            (DST extends { __typename: any }
                                ? _FieldsSelection<
                                      IMPLEMENTORS[Key],
                                      { __typename: true }
                                  >
                                : {})
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

type Last_FieldsSelectionSRCResolver<SRC, DST> = SRC extends undefined
    ? undefined
    : SRC extends Array<infer AR>
    ? Last_FieldsSelectionSRCResolver<AR, DST>[]
    : SRC extends { __interface: any; __resolve: any }
    ? MapInterface<SRC, DST>
    : SRC extends { __union: any; __resolve: infer RESOLVE }
    ? ObjectToUnion<_FieldsSelection<RESOLVE, ValueToUnion<DST>>>
    : DST extends boolean
    ? SRC
    : _FieldsSelection<SRC, DST>
