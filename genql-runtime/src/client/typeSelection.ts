

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
? SRC
: DST extends {
      __alias: any
  }
? {
      [A in keyof DST['__alias']]: Required<SRC> extends Anify<
          DST['__alias'][A]
      >
          ? MapType<Required<SRC>, DST['__alias'][A]>
          : never
  } &
      {
          [Key in keyof Omit<DST, '__alias'>]: DST[Key] extends [
              any,
              infer PAYLOAD,
          ]
              ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
              : LastMapTypeSRCResolver<SRC[Key], DST[Key]>
      }
: {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>
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
                      ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                            Omit<
                                {
                                    [Key in keyof Omit<
                                        DST,
                                        keyof IMPLEMENTORS | '__typename'
                                    >]: Key extends keyof INTERFACE
                                        ? LastMapTypeSRCResolver<
                                              INTERFACE[Key],
                                              DST[Key]
                                          >
                                        : never
                                },
                                keyof IMPLEMENTORS
                            > &
                            (DST extends { __typename: any }
                                ? MapType<
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

type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
    ? undefined
    : SRC extends Array<infer AR>
    ? LastMapTypeSRCResolver<AR, DST>[]
    : SRC extends { __interface: any; __resolve: any }
    ? MapInterface<SRC, DST>
    : SRC extends { __union: any; __resolve: infer RESOLVE }
    ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
    : DST extends boolean
    ? SRC
    : MapType<SRC, DST>
