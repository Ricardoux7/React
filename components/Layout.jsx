/* 
Crea una componente llamada layout que abarque toda la aplicación y coloque un padding a los lados de la página, 
crea un componente llamado grid el cual me permita seleccionar cuantas columnas deseo, pueden ser iguales o desiguales. Cada columna debe mostrar un parrafo que puede contener cualquier texto, pero todos los parrafos deben tener los mismos estilos (deben ser un componente)
*/

function Layout({ children ="", padding="0" }) {
    return (
        <section className={`bg-red-100 flex flex-col w-full h-screen px-[${padding}]`}>
            {children}
        </section>
    )
    
}

export { Layout };