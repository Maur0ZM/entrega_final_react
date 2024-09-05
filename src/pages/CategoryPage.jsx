// CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/data';

const CategoryPage = () => {
    const { categoriaId } = useParams(); 
    const [filtroProductos, setFiltroProductos] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productosFiltrados = productos.filter(
                (producto) => producto.category === categoriaId
            );
            setFiltroProductos(productosFiltrados);
        };
        fetchProducts();
    }, [categoriaId]);  
    return (
        <div className="mt-10 flex flex-col w-full items-center mb-8">
            <section className='flex gap-6 flex-wrap'>
                {filtroProductos.map((producto) => (
                    <article key={producto.id}>
                        <h4>{producto.title}</h4>
                        <img src={producto.image} alt="" />
                        <p>Precio: {producto.price}</p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default CategoryPage;
