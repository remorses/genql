export interface InterfaceF {
  value: Scalars['Int']
  maybeValue: Scalars['Int'] | null
  valueList: Scalars['Int'][]
  maybeValueList: (Scalars['Int'] | null)[]
  valueMaybeList: Scalars['Int'][] | null
  maybeValueMaybeList: (Scalars['Int'] | null)[] | null
  nested: Scalars['Int'][][][]
  maybeNested: (((Scalars['Int'] | null)[] | null)[] | null)[] | null
  __typename: string
}

export interface Interface {
  some: Scalars['Int'] | null
  other: Scalars['Int'] | null
  another: Scalars['Int'] | null
  __typename: string
}

/** single line description */
export interface InterfaceD {
  /** @deprecated No longer supported */
  some: Scalars['Int'] | null
  /** single line description */
  other: Scalars['Int'] | null
  /**
   * @deprecated No longer supported
   * single line description
   */
  another: Scalars['Int'] | null
  __typename: string
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
  some: Scalars['Int'] | null
  /**
   * @deprecated No longer supported
   * multiline
   * description
   */
  other: Scalars['Int'] | null
  __typename: string
}
