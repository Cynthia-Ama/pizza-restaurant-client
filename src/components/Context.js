import { useContext, useState, createContext, useReducer, useEffect } from "react";
import reducer from './reducer'

export const AppContext = createContext()

export const AppProvider = ({children})=>{
    const [loading, setloading] = useState(false)
    const [issidebarOpen, setissidebarOpen] = useState(false)

    const opensideBar = ()=>{
        setissidebarOpen(true)
    }

    const closesideBar = ()=>{
        setissidebarOpen(false) 
    }

    const initialState = {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        amount: 0,
        total: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    function AddtoCart(id, title, img, count, price){
        dispatch({type: 'ADDTOCART' , payload: {id, title, img, count, price}})
    }

    function increaseCart(id){
        dispatch({type: 'INCREASE', payload: id})
    }

    function decreaseCart(id){
        dispatch({type: 'DECREASE', payload: id})
    }

    function clearCart(){
        dispatch({type: 'CLEAR_CART'})
    }

    function removeItem(id){
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    useEffect(()=>{
        dispatch({type: 'GET_TOTALS'})
    },[state.cart])

  
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },[state.cart])


    return (
        <AppContext.Provider value={{issidebarOpen, opensideBar, closesideBar, ...state, AddtoCart, increaseCart, decreaseCart, clearCart, removeItem, loading, setloading}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}