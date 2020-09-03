//////////////////////////////////////////////////

export type FieldsSelection<SRC extends Anify<DST>, DST> = {
    tuple: DST extends readonly [any, infer PAYLOAD]
        ? FieldsSelection<SRC, PAYLOAD>
        : never
    scalar: SRC
    union: Handle__isUnion<SRC, DST>
    object: Pick<
        {
            // using keyof SRC to maintain ?: relations of SRC type
            [Key in keyof SRC]: Key extends keyof DST
                ? FieldsSelection<SRC[Key], DST[Key]>
                : SRC[Key]
        },
        {
            // remove falsy values
            [Key in keyof DST]: DST[Key] extends false | 0 ? never : Key
        }[keyof DST]
    >
    __scalar: Handle__scalar<SRC, DST>
    never: never
}[DST extends undefined
    ? 'never'
    : DST extends readonly [any, any]
    ? 'tuple'
    : DST extends false | 0
    ? 'never'
    : SRC extends Scalar
    ? 'scalar'
    : SRC extends { __isUnion?: any }
    ? 'union'
    : DST extends { __scalar?: any }
    ? '__scalar'
    : DST extends {}
    ? 'object'
    : 'never']

type Handle__scalar<SRC extends Anify<DST>, DST> = SRC extends undefined
    ? never
    : Omit<
          Pick<
              // continue processing fields that are in DST, directly pass SRC type if not in DST
              {
                  [Key in keyof SRC]: Key extends keyof DST
                      ? FieldsSelection<SRC[Key], DST[Key]>
                      : SRC[Key]
              },
              // remove fields that are not scalars or are not in DST
              {
                  [Key in keyof SRC]: SRC[Key] extends undefined
                      ? never
                      : SRC[Key] extends Scalar
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
