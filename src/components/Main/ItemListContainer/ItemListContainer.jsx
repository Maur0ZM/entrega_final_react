import React from 'react';
import productos from '../../../data/data';
import { Link } from 'react-router-dom';

export const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="mt-10 flex flex-col w-full items-center gap-10 mb-10">
            <h1>{mensaje}</h1>
            <section className='flex gap-6 flex-wrap justify-center'>
                {productos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h4>{producto.title}</h4>
                            <Link to={`${producto.id}`}>
                                <img src={producto.image} alt={producto.title}/>
                            </Link>
                            <p>Precio: {producto.price}</p>
                        </article>
                    )
                })} 
            </section>
        </div>
    );
};
