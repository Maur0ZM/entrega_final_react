import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import Cargando from "../components/Cargando/Cargando";

function ItemsDetailContainer() {
    const { productoId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

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



    return (
        <section className="w-full flex justify-center mt-10">
            <article className="grid grid-cols-2 grid-rows-5 gap-12 w-3/4">
                <div className="row-start-1 row-end-4 flex justify-center">
                    <img src={item.img} alt="" />
                </div>
                <div className="row-start-1 row-end-3 justify-center flex flex-col">
                    <h1 className="text-3xl">{item.name}</h1>
                    <h3>${item.price}</h3>
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
            </article>
        </section>
        
    );
}

export default ItemsDetailContainer;
