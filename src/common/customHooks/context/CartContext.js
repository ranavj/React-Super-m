import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){
    const [cartProduct, setCartProduct] = useState([]);

    const addCartTotal = () => {
        return cartProduct.reduce((total, acum) => {
            return   total += acum.quantity
        }, 0)
    }

    const getTotalPrice = () => {
        return cartProduct.reduce((total, acum) => total += acum.price * acum.quantity, 0)
    }

    const handleAddProduct = (getProduct) => {
    const productExist = cartProduct.find(product => product.id === getProduct.id);

    if(productExist){
     const updateCartProduct = cartProduct.map(item => {
        if(item.id === getProduct.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      setCartProduct(updateCartProduct)
    }else{
      setCartProduct([...cartProduct, {...getProduct, quantity: 1}])
    }
  };

  const handleRemoveProduct = (id) => {
    const removeProduct = cartProduct.filter((product => product.id !== id));
    setCartProduct(removeProduct);
  };

  const value = {
      cartProduct,
      onProductAdd: handleAddProduct,
      addCartTotal,
      getTotalPrice,
      onProductDelete: handleRemoveProduct
  }

  return (
      <CartContext.Provider value={value}>
          {props.children}
      </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
