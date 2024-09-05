import { useParams } from "react-router-dom";
import productos from "../data/data";

function ItemsDetailContainer() {
    const { productoId } = useParams();

    const resultadoFind = productos.find((producto) => producto.id === parseInt(productoId));

    if (!resultadoFind) {
        return <p>Producto no encontrado</p>; 
    }

    const { image, title, price } = resultadoFind;

    return (
        <section className="w-full justify-center flex mt-10 mb-10">
            <article className="">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{price}</p>
             </article>
        </section>
        
    );
}

export default ItemsDetailContainer;
