export interface InterfaceRequest {
  noArgs?: boolean | number
  /**
   * @deprecated No longer supported
   * single line description
   */
  other?: boolean | number
  on_Object?: ObjectRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** single line description */
export interface ObjectRequest {
  /**
   * @deprecated No longer supported
   * single line description
   */
  noArgs?: boolean | number
  other?: boolean | number
  optionalArg?: [{ optional?: String | null }] | boolean | number
  requiredArg?: [
    {
      /** single line description */
      required: String
    },
  ]
  optionalArgObj?: [{ optional?: String | null }, InterfaceRequest] | InterfaceRequest
  requiredArgObj?: [
    {
      /** single line description */
      required: Enum
    },
    InterfaceRequest,
  ]
  argTypes?: [
    {
      /**
       * multiline
       * description
       */
      value: Int
      /** single line description */
      maybeValue?: Int | null
      valueList: Int[]
      maybeValueList: (Int | null)[]
      valueMaybeList?: Int[] | null
      maybeValueMaybeList?: (Int | null)[] | null
      nested: Int[][][]
      maybeNested?: (((Int | null)[] | null)[] | null)[] | null
    },
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InterfaceFieldRequest {
  field?: InterfaceRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}
