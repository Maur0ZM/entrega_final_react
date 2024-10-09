import { useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import Form from "../components/Form/Form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../styles/swAlert.css'
const Cart = () => {
    const { cartItems, total, removeToCart, addToCart} = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    }); 

    const [error, setError] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        const localError = {};
        
        if (!buyer.name) {
            localError.name = "El nombre es obligatorio";
        }
        if (!buyer.phone) {
            localError.phone = "El teléfono es obligatorio";
        }
        if (!buyer.email) {
            localError.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
            localError.email = "Formato de email inválido";
        }

        if (Object.keys(localError).length > 0) {
            const errorMessages = Object.values(localError).join("<br>");
            Swal.fire({
                icon: "error",
                title: "Error en el formulario",
                html: errorMessages,
                confirmButtonText: "Aceptar"
            });
            setError(localError);
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Orden aceptada correctamente",
                text: "Gracias por su compra",
                showConfirmButton: false,
                timer: 2500,
                customClass: {
                    popup: 'swal-custom-size'  
                }
              });
            setError({});
            addToDb();
        }
    };

    const addToDb = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        const purchase = {
            buyer, 
            items: cartItems,
            total: total,
            date: new Date()
        };

        addDoc(orderCollection, purchase)
        .then(res => {
            console.log(res.id);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const hanldeRemoveToCart = (item) => {
        removeToCart(item, 1);
    };

    const handleAddToCart = (item) => {
        addToCart(item, 1);
    };

    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="flex mt-10 justify-center text-3xl">Carrito de compras</h1>        
            <div className="flex flex-col w-3/5 items-center mb-10">
                {cartItems.length > 0 ? (
                    <div className="flex gap-20">
                        <ul className="flex flex-col gap-5">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex gap-3 items-center shadow-lg border rounded p-1">
                                    <Link to={`/producto/${item.id}`}>
                                        <img src={item.img} alt={item.name} className="w-28 h-28" />
                                    </Link>
                                    {item.name} ${item.price}
                                    <div className="flex gap-2 border rounded w-32 justify-around">
                                        <button onClick={() => hanldeRemoveToCart(item)}>-</button>
                                         {item.quantity}
                                        <button onClick={() => handleAddToCart(item)}>+</button>
                                    </div>
                                </li>
                            ))}
                            <p className="text-xl">${total}</p>
                        </ul>
                        <Form 
                            handleChange={handleChange} 
                            submit={submit} 
                            formData={buyer} 
                            error={error}
                        />
                    </div>
                ) : (
                    <h3>Tu carrito está vacío</h3>
                )}
            </div>
        </div>
    );
};

export default Cart;
