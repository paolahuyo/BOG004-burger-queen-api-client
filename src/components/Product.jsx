const Product = (props) => {
    const onClick = () => {
      props.handleAddProduct({name: props.name, price: props.price, id: props.id});
    }
  
    return (
      <div className='product' onClick={onClick}>
        <img className='img-product' src={props.image} alt={props.name} />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    );
  };
  
  export default Product;