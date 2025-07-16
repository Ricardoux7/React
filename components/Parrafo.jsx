function Parrafo({ text="Default text"}){
    return (
        <p className="text-blue-800 text-lg p-4 bg-white rounded shadow-md">
            {text}
        </p>
    )
}

export { Parrafo };