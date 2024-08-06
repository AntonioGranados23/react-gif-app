import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');


    // Obtenemos el valor del input, que finalmente es lo que se escribe
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    } 

    // Controlamos el formulario para evitar que se actualice la pagina al presionar enter
    const onSubmit = (event) => {
        event.preventDefault();

        // Validamos que debe almenos un caracter para poder agregarlo al arreglo de categorias
        if(inputValue.trim() <= 1) return;

        // Agregamos la nueva categoria escrita en el input al arreglo
        onNewCategory(inputValue.trim());


        // Limpiamos el input al agregar la nueva categoria
        setInputValue('')
        
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input type="text"
        placeholder="Buscar Gifs"
        autoComplete="off"
        value={inputValue}
        onChange={onInputChange}
         />
    </form>
  )
}
