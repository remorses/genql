export interface InterfaceGenqlSelection {
  noArgs?: boolean | number
  /**
   * @deprecated No longer supported
   * single line description
   */
  other?: boolean | number
  on_Object?: ObjectGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** single line description */
export interface ObjectGenqlSelection {
  /**
   * @deprecated No longer supported
   * single line description
   */
  noArgs?: boolean | number
  other?: boolean | number
  optionalArg?: [{ optional?: Scalars['String'] | null }] | boolean | number
  requiredArg?: [
    {
      /** single line description */
      required: Scalars['String']
    },
  ]
  optionalArgObj?:
    | [{ optional?: Scalars['String'] | null }, InterfaceGenqlSelection]
    | InterfaceGenqlSelection
  requiredArgObj?: [
    {
      /** single line description */
      required: Enum
    },
    InterfaceGenqlSelection,
  ]
  argTypes?: [
    {
      /**
       * multiline
       * description
       */
      value: Scalars['Int']
      /** single line description */
      maybeValue?: Scalars['Int'] | null
      valueList: Scalars['Int'][]
      maybeValueList: (Scalars['Int'] | null)[]
      valueMaybeList?: Scalars['Int'][] | null
      maybeValueMaybeList?: (Scalars['Int'] | null)[] | null
      nested: Scalars['Int'][][][]
      maybeNested?: (((Scalars['Int'] | null)[] | null)[] | null)[] | null
    },
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InterfaceFieldGenqlSelection {
  field?: InterfaceGenqlSelection
  __typename?: boolean | number
  __scalar?: boolean | number
}
