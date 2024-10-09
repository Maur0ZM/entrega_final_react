import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import Cargando from "../components/Cargando/Cargando";
import { CartContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { joyasPamDescription } from "../assets/text/description";


function ItemsDetailContainer() {
    const { productoId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log("ID obtenido:", productoId); 
        if (!productoId) {
            console.error("El ID es undefined o inválido.");
            setLoading(false);
            return;
        }

        const db = getFirestore();
        const docRef = doc(db, "productos", productoId);

        getDoc(docRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            } else {
                console.error("No se encontró el producto");
            }
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error al obtener el documento: ", error);
            setLoading(false);
        });
    }, [productoId]);

    if (loading) {
        return <Cargando/>;
    }

    if (!item) {
        return <div>No se encontró el producto</div>;
    }

    const handleAddToCart = () => {
        addToCart(item, 1); 
    };

    return (
        <section className="w-full flex justify-center mt-10">
            <article className="grid grid-cols-2 grid-rows-5 gap-12 w-3/4">
                <div className="row-start-1 row-end-3 col-start-1 col-end-2 flex justify-center">
                    <img src={item.img} alt="" />
                </div>
                <div className="row-start-1 row-end-2 col-start-2 col-end-3 justify-center flex flex-col">
                    <h1 className="text-3xl">{item.name}</h1>
                    <h3>${item.price}</h3>
                </div>
                <div className="flex flex-col gap-1 items-start row-start-2 row-end-3 col-start-2 col-end-3">
                    <Link to="/cart" className="relative w-full flex justify-center overflow-hidden">
                        <button 
                            onClick={handleAddToCart} 
                            className="relative w-full z-10 bg-indigo-300 hover:opacity-80 text-black hover:text-white transition-all duration-500"
                        >
                            Añadir al carrito
                        </button>
                    </Link>
                    <button className="relative w-full bg-indigo-300 hover:opacity-80 text-black hover:text-white transition-all duration-500">
                        Compra y envios
                    </button>
                </div>
                <div className="flex flex-col gap-1 items-start row-start-3 row-end-4">
                    <hr className="border-2 w-full "/>
                    <button >Devolución y cambio</button>
                    <hr className="border-2 w-full "/>
                    <button >Como cuidar tus joyas</button>
                    <hr className="border-2 w-full "/>      
                </div>
                <div className="row-start-3 row-end-5 col-start-2 col-end-3">
                    <p>{joyasPamDescription}</p>
                </div>
            </article>
        </section>
    );
}

export default ItemsDetailContainer;
