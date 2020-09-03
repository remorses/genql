type Scalar = string | number | Date | boolean | null | undefined

// SRC is the response type, DEST is the request type
// export type FieldsSelection<SRC extends Anify<DST>, DST> = DST extends never
//     ? never
//     : DST extends Scalar
//     ? SRC // TODO query fields selection is done only on the top level fields, if i want to use recursively i must handle the on_ cases
//     : Anify<Omit<DST, '__typename' | '__scalar'>> extends Anify<
//           NonNullable<SRC>
//       >
//     ? Pick<SRC, keyof DST>
//     : SRC

type Anify<T> = { [P in keyof T]?: any }

//////////////////////////////////////////////////

// type requestType =
//     | Record<string, any>
//     | [Record<string, any>, Record<string, any>]

// type ObjectSelection<SRC extends Anify<DST>, DST> = Anify<
//     Omit<DST, '__typename' | '__scalar'>
// > extends Anify<NonNullable<SRC>>
//     ? Pick<SRC, keyof DST>
//     : SRC

type HandleScalars<SRC, DST> = SRC extends undefined
    ? never
    : DST extends true | 1
    ? SRC
    : SRC extends Scalar
    ? SRC
    : DST extends { __scalar?: any }
    ? Handle__scalar<SRC, DST>
    : SRC extends { __isUnion?: any }
    ? HandleUnions<SRC, DST>
    : FieldsSelection<SRC, DST>

type Handle__scalar<SRC extends Anify<DST>, DST> = SRC extends undefined
    ? never
    : Omit<
          Pick<
              {
                  [Key in keyof SRC]: Key extends keyof DST
                      ? HandleScalars<SRC[Key], DST[Key]>
                      : SRC[Key]
              },
              {
                  [Key in keyof SRC]: NonNullable<SRC[Key]> extends Scalar
                      ? Key
                      : Key extends keyof DST
                      ? Key
                      : never
              }[keyof SRC]
          >,
          '__scalar'
      >

// unions are very dumb
// TODO add the __isUnion key to every union type
type HandleUnions<SRC extends Anify<DST>, DST> = SRC extends undefined
    ? never
    : Omit<SRC, '__isUnion'> // TODO apply a FieldsSelection inside every on_ and on the top level fields

// TODO handle on_ keys
export type FieldsSelection<SRC extends Anify<DST>, DST> = Pick<
    {
        [Key in keyof SRC]: Key extends keyof DST
            ? DST[Key] extends [any, infer PAYLOAD]
                ? HandleScalars<SRC[Key], PAYLOAD>
                : HandleScalars<SRC[Key], DST[Key]>
            : never
    },
    keyof DST
>
