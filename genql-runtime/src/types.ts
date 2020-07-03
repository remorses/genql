// TYPE MAP ////////////
// the type of types.json object

export interface ArgMap {
    [arg: string]: [string, string] | undefined
}

export interface Field {
    type: string
    args?: ArgMap
}

export interface FieldMap {
    [field: string]: Field | undefined
}

// true when type is scalar
export type Type = {
    fields?: FieldMap
    __isAUsedScalarType?: boolean
    // scalar?: string[]
}

export interface TypeMap {
    [type: string]: Type | undefined
}

// LINKED TYPE ////////////

export interface LinkedArgMap {
    [arg: string]: [string, LinkedType] | undefined
}
export interface LinkedField {
    type: LinkedType
    args?: LinkedArgMap
}

export interface LinkedFieldMap {
    [field: string]: LinkedField | undefined
}

export interface LinkedType {
    name: string
    fields?: LinkedFieldMap
    scalar?: string[] // TODO make this required
}

export interface LinkedTypeMap {
    [type: string]: LinkedType | undefined
}
