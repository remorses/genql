export interface ObjectI extends A, B {
  a1: Scalars['Int']
  a2: Scalars['Int']
  b1: Scalars['Int']
  b2: Scalars['Int']
  c1: Scalars['Int']
  c2: Scalars['Int']
  __typename: 'ObjectI'
}

export interface ObjectF {
  value: Scalars['Int']
  maybeValue: Scalars['Int'] | null
  valueList: Scalars['Int'][]
  maybeValueList: (Scalars['Int'] | null)[]
  valueMaybeList: Scalars['Int'][] | null
  maybeValueMaybeList: (Scalars['Int'] | null)[] | null
  nested: Scalars['Int'][][][]
  maybeNested: (((Scalars['Int'] | null)[] | null)[] | null)[] | null
  __typename: 'ObjectF'
}

export interface Object {
  some: Scalars['Int'] | null
  other: Scalars['Int'] | null
  another: Scalars['Int'] | null
  __typename: 'Object'
}

/** single line description */
export interface ObjectD {
  /** @deprecated No longer supported */
  some: Scalars['Int'] | null
  /** single line description */
  other: Scalars['Int'] | null
  /**
   * @deprecated No longer supported
   * single line description
   */
  another: Scalars['Int'] | null
  __typename: 'ObjectD'
}

/**
 * multiline
 * description
 */
export interface ObjectMD {
  /**
   * multiline
   * description
   */
  some: Scalars['Int'] | null
  /**
   * @deprecated No longer supported
   * multiline
   * description
   */
  other: Scalars['Int'] | null
  __typename: 'ObjectMD'
}
