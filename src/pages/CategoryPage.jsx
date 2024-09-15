import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, query, where, collection} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Cargando from '../components/Cargando/Cargando';

const CategoryPage = () => {
    const { categoriaId } = useParams(); 
    const [filtroProductos, setFiltroProductos] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="mt-10 flex flex-col w-full items-center mb-8">
            <section className='flex gap-6 flex-wrap'>
                {filtroProductos.map((producto) => (
                    <article key={producto.id}>
                        <h4>{producto.name}</h4>
                        <Link to={`/producto/${producto.id}`}>
                                <img src={producto.img} alt={producto.name}/>
                        </Link>
                        <p>Precio: {producto.price}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default CategoryPage;
