export interface InputF {
  value: Int
  maybeValue?: Int | null
  valueList: Int[]
  maybeValueList: (Int | null)[]
  valueMaybeList?: Int[] | null
  maybeValueMaybeList?: (Int | null)[] | null
  nested: Int[][][]
  maybeNested?: (((Int | null)[] | null)[] | null)[] | null
}

export interface Input {
  some?: Int | null
  other?: Int | null
  another?: Int | null
}

/** single line description */
export interface InputD {
  /** single line description */
  another?: Int | null
}

/**
 * multiline
 * description
 */
export interface InputMD {
  /**
   * multiline
   * description
   */
  some?: Int | null
}
