import React, { useState, createContext } from 'react';
 
export const CartContext = createContext({});
 
function CartProvider({ children }){
    const [ cart, setCart ] = useState([]);
    const [total, setTotal ] = useState(0);
 
    function addItemCart(newItem){
        //Verifica se o item existe, se sim pega a posição / index
        const indexItem = cart.findIndex(item => item.id === newItem.id)
 
        //Se o item já existe no carrinho ele adiciona mais 1 à quantidade da lista
        if(indexItem !== -1){
            //Cria uma cópia do array atual do carrinho
            let cartList = [...cart];
 
            //Pega a quantidade existente e soma + 1 da mesma
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
 
            //Pega o preço do valor unitário e multiplica pela quantidade somada anterior
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
 
            setCart(cartList)
            totalResultCart(cartList)
 
            //teste de exibição no console
            //console.log("Item já existia, quantidade atualizada: ", cartList);
            return;
        }
 
        //Se o produto ainda não existe no carrinho, ele adiciona primeiramente
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
 
        setCart(products => [...products, data])
        totalResultCart([...cart, data])
 
        //teste exibição no console
        //console.log("Novo item adicionado:", [...cart, data]);
    }
 
    function removeItemCart(product){
       //Verifica se o item existe, se sim pega a posição/index
       const indexItem = cart.findIndex(item => item.id === product.id)
       
       //Se o item no carrinho for maior que um, ou melhor se existir itens
       if(cart[indexItem]?.amount > 1){
 
        //Crie um cópia do array atual do carrinho
        let cartList = [...cart]
 
        //Pega a quantidade existente e subtrai -1 da mesma
        cartList[indexItem].amount = cartList[indexItem].amount - 1;
 
        //Pega o preço do valor total e subtrai o valor unitário
        cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
 
        setCart(cartList);
        totalResultCart(cartList);
        return;
       }
 
       //Se o produto não tiver id, elenão existe e é removido da lista
       const removeItem = cart.filter(item => item.id !== product.id)
       setCart(removeItem);
       totalResultCart(removeItem);
    }
 
    function totalResultCart(items) {
        let myCart = items;
 
        //Acumulador de objetos
        let result =  myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
 
        setTotal(result);
    }
 
    return(
        <CartContext.Provider
        value={{
            cart,
            addItemCart,
            removeItemCart,
            total
        }}
        >
        {children}
        </CartContext.Provider>
    )
}
 
export default CartProvider;