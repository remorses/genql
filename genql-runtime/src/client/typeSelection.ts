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

type requestType =
    | Record<string, any>
    | [Record<string, any>, Record<string, any>]

// TODO handle scalar values, requests with on_, __scalar, literals unions,
type ObjectSelection<SRC extends Anify<DST>, DST> = Anify<
    Omit<DST, '__typename' | '__scalar'>
> extends Anify<NonNullable<SRC>>
    ? Pick<SRC, keyof DST>
    : SRC

type HandleScalars<SRC, DST> = DST extends true | 1
    ? SRC
    : DST extends { __scalar?: any }
    ? Handle__scalar<SRC, DST>
    : FieldsSelection<SRC, DST>

type Handle__scalar<SRC extends Anify<DST>, DST> = Omit<
    {
        [Key in keyof SRC]: Key extends keyof DST
            ? HandleScalars<SRC[Key], DST[Key]>
            : SRC[Key] extends Scalar
            ? SRC[Key]
            : never
    },
    '__scalar'
>

export type FieldsSelection<SRC extends Anify<DST>, DST> = {
    [Key in keyof SRC]: Key extends keyof DST
        ? DST[Key] extends [any, infer PAYLOAD]
            ? HandleScalars<SRC[Key], PAYLOAD>
            : HandleScalars<SRC[Key], DST[Key]>
        : never
}
