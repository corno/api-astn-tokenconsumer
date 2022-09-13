import * as pt from "pareto-core-types"

export type TWrapping =
    | ["quote", {}]
    | ["apostrophe", {}]
    | ["none", {}]

export type TSimpleStringData = {
    readonly "wrapping": TWrapping
    readonly "value": string
}

export type TMultilineStringData = {
    readonly "lines": pt.Array<string>
}

export type TStructuralTokenType =
    | ["tagged union start", {}]
    | ["open shorthand group", {}]
    | ["close shorthand group", {}]
    | ["open verbose group", {}]
    | ["close verbose group", {}]
    | ["open dictionary", {}]
    | ["close dictionary", {}]
    | ["open list", {}]
    | ["close list", {}]

export type TStructuralTokenData = {
    readonly "type": TStructuralTokenType
}

export type TToken =
    | ["header start", {}]
    | ["structural", TStructuralTokenData]
    | ["simple string", TSimpleStringData]
    | ["multiline string", TMultilineStringData]
