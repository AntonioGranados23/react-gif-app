import { useState } from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
    // Para controlar las categorias
    const [categories, setcategories] = useState(['Shingeki no kioyin', 'Kimetzu no yaiba']);

    const onAddCategory = (newCategory) => {
      // validamos que si el arreglo de categories ya incluye la nueva categoria no se agregue en el arreglo
      if (categories.includes(newCategory)) return;


      // hacemos una copia de las categorias y agregamos el nuevo elemento al arreglo
      setcategories([newCategory, ...categories])
      console.log(newCategory);
    } 


  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {/* Listado de Gifs*/}
        {/* recorremos el arreglo de categorias y retonamos la lista con las mismas */}
        {
          categories.map((category) => (
              <GifGrid key={category} category={category}  />
          ))
        }

    </>
  )
}
