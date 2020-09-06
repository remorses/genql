export interface InputF {
  value: Scalars['Int']
  maybeValue?: Scalars['Int'] | null
  valueList: Scalars['Int'][]
  maybeValueList: (Scalars['Int'] | null)[]
  valueMaybeList?: Scalars['Int'][] | null
  maybeValueMaybeList?: (Scalars['Int'] | null)[] | null
  nested: Scalars['Int'][][][]
  maybeNested?: (((Scalars['Int'] | null)[] | null)[] | null)[] | null
}

export interface Input {
  some?: Scalars['Int'] | null
  other?: Scalars['Int'] | null
  another?: Scalars['Int'] | null
}

/** single line description */
export interface InputD {
  /** single line description */
  another?: Scalars['Int'] | null
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
  some?: Scalars['Int'] | null
}
