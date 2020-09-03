//////////////////////////////////////////////////

export type FieldsSelection<SRC extends Anify<DST>, DST> = Pick<
    {
        // using keyof SRC to maintain ?: relations of SRC type
        [Key in keyof SRC]: Key extends keyof DST
            ? DST[Key] extends [any, infer PAYLOAD]
                ? HandleScalars<SRC[Key], PAYLOAD> // continue processing only on the selection field
                : HandleScalars<SRC[Key], DST[Key]>
            : never
    },
    keyof DST
>

type HandleScalars<SRC, DST> = SRC extends undefined
    ? never
    : DST extends true | 1 // directly return scalar types
    ? SRC
    : SRC extends Scalar // directly return scalar types
    ? SRC
    : SRC extends { __isUnion?: any } // process types with __isUnion field
    ? Handle__isUnion<SRC, DST>
    : DST extends { __scalar?: any } // process types with __scalar field // TODO how to handle unions and __scalar together?
    ? Handle__scalar<SRC, DST>
    : FieldsSelection<SRC, DST> // process normal object types

type Handle__scalar<SRC extends Anify<DST>, DST> = SRC extends undefined
    ? never
    : Omit<
          Pick<
              // continue processing fields that are in DST, directly pass SRC type if not in DST
              {
                  [Key in keyof SRC]: Key extends keyof DST
                      ? HandleScalars<SRC[Key], DST[Key]>
                      : SRC[Key]
              },
              // remove fields that are not scalars or are not in DST
              {
                  [Key in keyof SRC]: SRC[Key] extends Scalar
                      ? Key
                      : Key extends keyof DST
                      ? Key
                      : never
              }[keyof SRC]
          >,
          FieldsToRemove
      >

// TODO response union types are very dumb
type Handle__isUnion<SRC extends Anify<DST>, DST> = SRC extends undefined
    ? never
    : Omit<SRC, FieldsToRemove> // just return the union type

type Scalar = string | number | Date | boolean | null | undefined

type Anify<T> = { [P in keyof T]?: any }

type FieldsToRemove = '__isUnion' | '__scalar'
