import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, query, where, collection} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Cargando from '../components/Cargando/Cargando';
import { CartContext } from '../Context/Context';
const CategoryPage = () => {
    const { categoriaId } = useParams(); 
    const [filtroProductos, setFiltroProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log("ID obtenido:", categoriaId); 
        if (!categoriaId) {
            console.error("El ID es undefined o inválido.");
            setLoading(false);
            return;
        }

        const db = getFirestore();
        const productosCollection = collection(db, "productos");

        const q = query(productosCollection, where("category", "==", categoriaId));

        getDocs(q)
            .then((snapshot) => {
                if (!snapshot.empty) {
                    setFiltroProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                } else {
                    console.error("No se encontraron productos en esta categoría");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener los productos: ", error);
                setLoading(false);
            });
    }, [categoriaId]);  

    if (loading) {
        return <Cargando/>;
    }

    if (!filtroProductos) {
        return <div>No se encontró el producto</div>;
    }

    const handleAddToCart = (item) =>{
        addToCart(item, 1);
    }

    return (
        <div className="mt-10 flex flex-col w-full items-center mb-8">
            <section className="flex gap-6 flex-wrap">
                {filtroProductos.map((producto) => (
                    <article key={producto.id} className="text-center">
                        <h4>{producto.name}</h4>
                        <Link to={`/producto/${producto.id}`} className="block overflow-hidden">
                            <img 
                                src={producto.img} 
                                alt={producto.name} 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </Link>
                        <div className="flex items-center flex-col gap-1 mt-1">
                            <p>${producto.price}</p>
                            <Link to='/cart' className="border-2 rounded w-full hover:bg-indigo-300 duration-500">
                                <button onClick={() => handleAddToCart(producto)} className="w-full">Agregar al carrito</button>
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default CategoryPage;
