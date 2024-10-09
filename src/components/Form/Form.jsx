import React from "react"

const Form = ({ handleChange, submit, formData, error}) => {

    return (
        <div className="flex w-3/5 justify-center border rounded-3xl h-72 shadow items-center">
            <form onSubmit={submit} className="flex flex-col">
                {
                    Object.keys(formData).map((key, i) => (
                        <React.Fragment key={i}>
                            <label htmlFor={key}>Ingrese su {key}:</label>
                            <input className="w-45 bg-indigo-300 border rounded" 
                                type="text" 
                                name={key} 
                                id={key} 
                                onChange={handleChange}
                            />
                        </React.Fragment>
                    ))
                }
                <button onClick={submit} className="bg-indigo-300 w-40 rounded mt-1">Crear Orden</button>
            </form>
        </div>

    )
}

export default Form;
