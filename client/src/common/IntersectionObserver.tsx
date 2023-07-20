

export type Options = {
    root? : HTMLElement | null,
    rootMargin? : string,
    threshold? : number | Array<number>,
}

const useIntersectionObserver = ( callback: Function | any, options?: Options ) : IntersectionObserver => {
    // sometimes, I hate TS.
    let observer = options ? new IntersectionObserver(callback, options) : new IntersectionObserver(callback) ;
    return observer ;
} ;


export default useIntersectionObserver