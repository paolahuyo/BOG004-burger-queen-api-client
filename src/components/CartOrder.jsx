import { useState } from "react";
import { createOrder } from "../api/Products"
import Cart from "./Cart"

const CartOrder = ({ selectedProduct, setSelectedProduct, setVSumTotal, vSumTotal}) => {

    const [customerName, setCustomerName] = useState("");
    const [order, SetOrders] = useState({
        products: [],
    });

    const createOrderCart = async () => {
        SetOrders({
          ...order,
          client: customerName ? customerName : "cliente",
          products: selectedProduct
            ? selectedProduct.map((el) => {
                var rObj = {};
                rObj.productId = el._id;
                rObj.qty = el.qty;
                return rObj;
              })
            : [],
        });
        console.log(order);

        await createOrder(order).then((response) =>
        console.log(response.data)
        );
    };

    const handleIncreaseProduct = (id) => {
        const newProduct = selectedProduct.filter((product) => product._id === id);
        if (newProduct[0].qty >= 1) {
          const newSelectedProducts = selectedProduct.map((product) => {
            if (product._id === id) product.qty++;
            product.priceNew = product.qty * product.price;
            setVSumTotal(vSumTotal+ product.priceNew);
            product.productId = product._id;

            return product;
          });
          setSelectedProduct(newSelectedProducts);
        }
      };

      const handleDecreaseProduct = (id) => {
        const newProduct = selectedProduct.filter((product) => product._id === id);
        if (newProduct[0].qty > 1) {
          const newProducts = selectedProduct.map((product) => {
            if (product._id === id) product.qty--;
            product.priceNew = product.qty * product.price;
            product.productId = product._id;
            return product;
          });
          setSelectedProduct(newProducts);
        }
      };

      const handleDeleteProduct = (id) => {
        const newProduct = selectedProduct.filter((product) => product._id === id);
        if (newProduct[0].qty === 1) {
          const newProducts = selectedProduct.filter(
            (product) => product._id !== id
          );
          setSelectedProduct(newProducts);
        }
      };
    return(
        <div>
        <div>
          <div>
            <p>Nombre del cliente: {}</p>
            <input
              onChange={(e) => setCustomerName(e.target.value)}
              type={"text"}
              placeholder={"Ingresa el nombre del cliente"}
            />
          </div>
        </div>
      <table>
        <thead>
          <tr className=" text-center">
            <th className=" ">
              PRODUCT
              <span>|</span>
            </th>
            <th>
              AMOUNT
              <span>|</span>
            </th>
            <th>PRICE</th>
          </tr>
        </thead>

        <Cart
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          handleDeleteProduct={handleDeleteProduct}
          handleIncreaseProduct={handleIncreaseProduct}
          handleDecreaseProduct={handleDecreaseProduct}
        />
      </table>

      <div> Total: $ {vSumTotal}</div>

      <div className="flex flex-row">
        <button type={"secondary"}>Cancelar</button>
        <button type={"secondary"} onClick={() => createOrderCart()}>Mandar a la cocina</button>
      </div>
    </div>
    )
}

export default CartOrder;