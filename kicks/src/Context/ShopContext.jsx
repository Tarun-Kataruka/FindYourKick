import React, { createContext, useEffect, useState } from 'react'


 export const ShopContext = createContext(null);

 const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;  
    }
    return cart;
}

 const ShopContextProvider = (props) => {

    const[all_product, setAll_Product] = useState([]);
    const[cartItems, setCartItems] = useState(getDefaultCart());
    const [category_products , setCategoryProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        const authToken = localStorage.getItem('auth-token');
        console.log('Auth-Token:',authToken);

        if(authToken){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${authToken}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({}),
            }).then(response =>{
                if(!response.ok){
                    throw new Error('Failed to fetch cart data');
                }
                return response.json();
            })
            .then(data =>setCartItems(data))
            .catch(error => console.error('Error fetching cart data:',error));
        }
    },[])
    
    const fetchProductByCategory = async (category) =>{
        try{
        const response = await fetch(`http://localhost:4000/products/${category}`)
        if (!response.ok) {
            if (response.status === 404) {
              console.error('Category not found');
              setCategoryProducts([]); // Set to an empty array or handle accordingly
              return;
            }
            throw new Error('Failed to fetch category products');
          }
          const products = await response.json();
          setCategoryProducts(products);
        } catch (error) {
          console.error('Error fetching category products:', error);
        }
    };

   

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: (prev[itemId] || 0)+1}))
        if(localStorage.getItem('auth-token')){
            await fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({itemId})
            })
            .then(response =>{
                if(!response.ok){
                    throw new Error('Failed to add cart data');
                }
                return response.json();
            })
            .then(data =>setCartItems(data))
            .catch(error => console.error('Error adding cart data:',error));
        }
    };

    

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            await fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    Authorization:`Bearer ${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmt = () => {
        let totalAmt = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) =>product.id === Number(item))
                totalAmt += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmt;
    }

    const getTotalCartItem = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }
    
    const contextValue = {getTotalCartItem,getTotalCartAmt,all_product,cartItems,addToCart,removeFromCart,category_products, fetchProductByCategory };

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;
  
