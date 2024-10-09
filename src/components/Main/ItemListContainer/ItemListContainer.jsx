    import React from 'react';
    import { Link } from 'react-router-dom';
    import { collection, getDocs, getFirestore} from 'firebase/firestore';
    import { useEffect, useState, useContext } from 'react';
    import Cargando from '../../Cargando/Cargando';
    import { CartContext } from '../../../Context/Context';
    export const ItemListContainer = ({ mensaje }) => {

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const { addToCart } = useContext(CartContext);

        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "productos");
            getDocs(itemsCollection)
            .then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
                console.error("Error fetching data: ", err);
            });
        }, []);

        if (loading) {
            return <Cargando/>;
        }

        if (error) {
            return <div>Error fetching data.</div>;
        }
        console.log(data);

        const handleAddToCart = (item) =>{
            addToCart(item, 1);
        }

        return (
            <div className="mt-10 flex flex-col w-full items-center gap-10 mb-10">
                <h1 className="text-xl">{mensaje}</h1>
                <section className='flex gap-6 flex-wrap justify-center'>
                    {data.map((producto)=>{
                        return (
                            <article key={producto.id}>
                                <h4 className="text-center mb-2">{producto.name}</h4>
                                <Link to={`/producto/${producto.id}`} className='block overflow-hidden'>
                                    <img 
                                    src={producto.img} 
                                    alt={producto.name}
                                    className='transform transition-transform duration-300 ease-in-out hover:scale-110'
                                    />
                                </Link>
                                <div className="flex items-center flex-col gap-1 mt-1">
                                    <p>${producto.price}</p>
                                    <Link to='/cart' className="border-2 rounded w-full hover:bg-indigo-300 duration-500">
                                        <button onClick={() => handleAddToCart(producto)} className="w-full">Agregar al carrito</button>
                                    </Link>
                                </div>
                            </article>
                        )
                    })} 
                </section>
            </div>
        );
    };
