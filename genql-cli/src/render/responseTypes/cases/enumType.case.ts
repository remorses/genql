export enum Enum {
  some = 'some',
  other = 'other',
  another = 'another',
}

/** single line description */
export enum EnumD {
  /** single line description */
  some = 'some',
  /** @deprecated No longer supported */
  other = 'other',
  /**
   * @deprecated No longer supported
   * single line description
   */
  another = 'another',
}

/**
 * multiline
 * description
 */
export enum EnumMD {
  /**
   * multiline
   * description
   */
  some = 'some',
  /**
   * @deprecated No longer supported
   * multiline
   * description
   */
  other = 'other',
}
