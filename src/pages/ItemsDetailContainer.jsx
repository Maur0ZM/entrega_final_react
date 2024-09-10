import { useParams } from "react-router-dom";
import productos from "../data/data";

function ItemsDetailContainer() {
    const { productoId } = useParams();

    const resultadoFind = productos.find((producto) => producto.id === parseInt(productoId));

    if (!resultadoFind) {
        return <p>Producto no encontrado</p>; 
    }

    const { image, title, price, description } = resultadoFind;

    return (
        <section className="w-full flex justify-center mt-10">
            <article className="grid grid-cols-2 grid-rows-5 gap-12 w-3/4">
                <div className="row-start-1 row-end-4 flex justify-center">
                    <img src={image} alt="" />
                </div>
                <div className="row-start-1 row-end-3 justify-center flex flex-col">
                    <h1 className="text-3xl">{title}</h1>
                    <h3>${price}</h3>
                </div>
                <div className="flex flex-col gap-1 items-start">
                    <button className="bg-indigo-300 w-full">Llevate el tuyo</button>
                    <button className="bg-indigo-300 w-full">Compra y envios</button>
                </div>
                <div className="flex flex-col gap-1 items-start">
                    <hr className="border-2 w-full "/>
                    <button >Devolución y cambio</button>
                    <hr className="border-2 w-full "/>
                    <button >Como cuidar tus joyas</button>
                    <hr className="border-2 w-full "/>      
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </article>
            
        </section>
        
    );
}

export default ItemsDetailContainer;
