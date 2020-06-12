import { PickByValue } from 'utility-types'

type ScalarFields<T> = PickByValue<
    T,
    string | number | Date | boolean | null | undefined
>

// SRC is the concrete type (for example Query), DST is the field selection, with shape { field: 1 | true, ... }
export type FieldsSelection<SRC extends Anify<DST>, DST> = DST extends true | 1 // if the field is true or 1 then return its type
    ? SRC
    : DST extends {
          __scalar: any
      }
    ? Omit<ScalarFields<SRC>, '__scalar'> &
          Omit<ObjectFieldsSelection<SRC, DST>, '__scalar'>
    : Omit<ObjectFieldsSelection<SRC, DST>, '__scalar'>

// creates a sunset of the SRC type with only the DST selection fields
type ObjectFieldsSelection<SRC extends Anify<DST>, DST> = {
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
                      ? FieldsSelection<IMPLEMENTORS[Key], DST[Key]> &
                            Omit<
                                {
                                    [Key in keyof Omit<
                                        DST,
                                        keyof IMPLEMENTORS | '__typename'
                                    >]: Key extends keyof INTERFACE
                                        ? LastFieldsSelectionSRCResolver<
                                              INTERFACE[Key],
                                              DST[Key]
                                          >
                                        : never
                                },
                                keyof IMPLEMENTORS
                            > &
                            (DST extends { __typename: any }
                                ? FieldsSelection<
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
    __typename: infer R
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
