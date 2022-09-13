import { TToken } from "./Token"

export type TAnnotatedToken<Annotation> = {
    readonly "token": TToken
    readonly "annotation": Annotation
}