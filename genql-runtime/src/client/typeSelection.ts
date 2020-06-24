type Scalar = string | number | Date | boolean | null | undefined

export type FieldsSelection<SRC extends Anify<DST>, DST> = DST extends never
    ? never
    : DST extends Scalar
    ? SRC
    : // TODO query fields selection is done only on the top level fields, if i want to use recursively i must handle the on_ cases
    Anify<Omit<DST, '__typename' | '__scalar'>> extends Anify<NonNullable<SRC>>
    ? Pick<SRC, keyof DST>
    : SRC

type Anify<T> = { [P in keyof T]?: any }

//////////////////////////////////////////////////
