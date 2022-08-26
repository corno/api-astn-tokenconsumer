import { Token } from "../types/Token"

export type AnnotatedToken<Annotation> = {
    readonly "token": Token
    readonly "annotation": Annotation
}

export type ITokenConsumer<Annotation> = {
    onToken($: AnnotatedToken<Annotation>): void
    onEnd(annotation: Annotation): void
}
