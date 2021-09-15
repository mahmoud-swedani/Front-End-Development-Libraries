const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component {props.item}</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = { items : 0 }