import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rs.';
    // const backendUrl='http://localhost:4000'
    const backendUrl='https://backend3-83tz.onrender.com'
    const delivery_fee = 10;
    const [search, setSearch] = useState('');   
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products,setProducts]=useState([]);
    const navigate =useNavigate();
    const [token,setToken]=useState('')

    const addToCart =async (itemId, size) => {
        if (!size || size.trim() === "") {
            toast.error("Please select size", { autoClose: 2000 });
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        toast.success("product added to cart")
        setCartItems(cartData);

        if(token){
            try {
                await axios.post(`${backendUrl}/api/cart/add`,{itemId,size},{headers:{token}})
                
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    // console.log('error', error);
                
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        if(token){
            try {
                await axios.post(`${backendUrl}/api/cart/update`,{itemId,size,quantity},{headers:{token}})
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    // console.log('error', error);
                }
            }
        }
        return totalAmount;
    };

    const getProductsData = async ()=>{
        try {
            // console.log(backendUrl)
            // const response = await axios.get(backendUrl + '/api/product/list')
            const response = await axios.get(`${backendUrl}/api/product/list`);
            // console.log(response)
            // if(response.success){
                setProducts(response.data.products)
            // }
            // else{
            //     toast.error(response.data.message)
            // }
        } catch (error) {
            console.log(response)
            toast.error(error.message)
        }
    }

    const getUserCart=async(token)=>{
        try{
            const response=await axios.post(`${backendUrl}/api/cart/get`,{},{headers:{token}})
            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        }
        catch (error) {
        console.log(error)
        toast.error(error.message)
    }
    }

    useEffect(()=>{
        getProductsData();
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    })

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems,setCartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount,navigate,backendUrl,token,setToken
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;