const Cart = ({ selectedProduct, handleDeleteProduct, handleIncreaseProduct, handleDecreaseProduct  }) => {

    return (

        <tbody className="tex-center">
          {selectedProduct.map((product) => (
            
            <tr key={product._id}>
              <td>{product.name} </td>
              <td>
                <div className="inline-flex px-2"> 
                <img className=" p-2 " onClick={() => handleDecreaseProduct(product._id)} alt={""} />
                {product.qty}
                <img className=" p-2 " onClick={() => handleIncreaseProduct(product._id)} alt={""} />
                </div>
              </td>
              <td> $ {(product.price) * product.qty} </td>
              <td >
                <button className="cursor-pointer" onClick={() => handleDeleteProduct(product._id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      )
    }
    
export default Cart;