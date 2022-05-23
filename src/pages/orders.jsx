import { useEffect, useState } from "react";
import { products } from "../api/Products";

export default function Orders({handleAddProduct}) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    products()
    .then((response) =>{
      console.log(response.data);
      setProductos(response.data)
    })
    .catch(() =>{});
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <Product key={producto.id} id={producto.id} handleAddProduct={handleAddProduct} name={producto.name} price={producto.price} image={producto.image}  />
      ))}
    </div>
  );
}
