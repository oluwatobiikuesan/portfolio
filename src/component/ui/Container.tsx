export function Container({children, className, type, ...root}:any){

    return(
            <div className={`${className}${root} ${type == "full" ? "lg:w-full" : "lg:w-[75dvw]"} lg:p-10 p-5 bg-black`}>
                {children}
            </div>
    )
}