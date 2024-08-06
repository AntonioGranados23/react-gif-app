import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);  

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {
            // validamos si el arreglo de imagenes esta vacio para mostrar un mensaje
            images.length === 0 ? (
              <h5 style={{color: "red"}}>No se encontraron resultados para "{category}"</h5>
            ): (
              // Recorremos el arreglo de imagenes obtenidas
              images.map((image) => ( 
                <GifItem key={image.id} {...image} /> 
              ))
            )
          }
        </div>
    </>
  )
}
