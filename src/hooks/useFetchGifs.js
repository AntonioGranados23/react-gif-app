import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

//   Funcion para obtener las imagenes de la categoria buscada
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  }
    
//   Renderizamos una sola vez cuando el componente se carga
  useEffect(() => {
    getImages();
  }, []);


    return {
        images,
        isLoading
    }
}
