import { TAnnotatedToken } from "../types/AnnotatedToken"

export type ITokenConsumer<Annotation> = {
    readonly "onToken": ($: TAnnotatedToken<Annotation>) => void
    readonly "onEnd": ($: Annotation) => void
}
