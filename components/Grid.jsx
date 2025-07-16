function Grid({ columns = 1, children=""}){
    return(
        <section className={`grid grid-cols-[${columns}] bg-red-500 `}>
            {children}
        </section>
    )
}

export { Grid };