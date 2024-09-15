    import React from 'react';
    import { Link } from 'react-router-dom';
    import { collection, getDocs, getFirestore} from 'firebase/firestore';
    import { useEffect, useState } from 'react';
    import Cargando from '../../Cargando/Cargando';
    export const ItemListContainer = ({ mensaje }) => {

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);

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

        return (
            <div className="mt-10 flex flex-col w-full items-center gap-10 mb-10">
                <h1>{mensaje}</h1>
                <section className='flex gap-6 flex-wrap justify-center'>
                    {data.map((producto)=>{
                        return (
                            <article key={producto.id}>
                                <h4>{producto.name}</h4>
                                <Link to={`/producto/${producto.id}`}>
                                    <img src={producto.img} alt={producto.name}/>
                                </Link>
                                <p>Precio: {producto.price}</p>
                            </article>
                        )
                    })} 
                </section>
            </div>
        );
    };
