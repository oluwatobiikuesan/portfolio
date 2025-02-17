export function Container({children, className, type, ...root}:any){

    return(
            <div className={`${className}${root} ${type == "full" ? "lg:w-full" : "lg:w-[60dvw]"} p-10 bg-black`}>
                {children}
            </div>
    )
}