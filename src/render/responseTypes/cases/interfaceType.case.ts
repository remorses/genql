export interface InterfaceF {
  value: Int
  maybeValue: Int | null
  valueList: Int[]
  maybeValueList: (Int | null)[]
  valueMaybeList: Int[] | null
  maybeValueMaybeList: (Int | null)[] | null
  nested: Int[][][]
  maybeNested: (((Int | null)[] | null)[] | null)[] | null
  __typename: String
}

export interface Interface {
  some: Int | null
  other: Int | null
  another: Int | null
  __typename: String
}

/** single line description */
export interface InterfaceD {
  /** @deprecated No longer supported */
  some: Int | null
  /** single line description */
  other: Int | null
  /**
   * @deprecated No longer supported
   * single line description
   */
  another: Int | null
  __typename: String
}

/**
 * multiline
 * description
 */
export interface InterfaceMD {
  /**
   * multiline
   * description
   */
  some: Int | null
  /**
   * @deprecated No longer supported
   * multiline
   * description
   */
  other: Int | null
  __typename: String
}
