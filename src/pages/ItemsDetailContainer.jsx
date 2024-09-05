import { useParams } from "react-router-dom";
import productos from "../data/data";

function ItemsDetailContainer() {
    const { productoId } = useParams();

    // Convertir productoId a número para que coincida con el id
    const resultadoFind = productos.find((producto) => producto.id === parseInt(productoId));

    if (!resultadoFind) {
        return <p>Producto no encontrado</p>; // Maneja el caso cuando el producto no existe
    }

    const { image, title, price } = resultadoFind;

    return (
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    );
}

export default ItemsDetailContainer;
