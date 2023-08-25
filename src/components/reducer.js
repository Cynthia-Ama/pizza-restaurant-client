
export default function reducer(state, action) {
  
    if(action.type === 'ADDTOCART'){
        const {id, title, img, count, price} = action.payload
        const cartItem = state.cart.find((item) => item.id === id)
        if(cartItem){
          return {
            ...state,
            cart: state.cart.map((item) => item.id === id ? {...item, count: item.count + 1} : item)
          }
        }
        else{
          return {
            ...state, 
            cart: [...state.cart, {id, title, img, count, price}]
          }
        }  
    }

    if(action.type === 'INCREASE'){
      let tempcart = state.cart.map((item)=>{
        if (item.id === action.payload){
          return {
            ...item,
            count: item.count + 1
          }
        }
        else {
          return item
        }
      })
      return {
        ...state,
        cart: tempcart
      }
    }

    if(action.type === 'DECREASE'){
      let tempcart = state.cart.map((item)=>{
        if (item.id === action.payload){
          return {
            ...item,
            count: item.count - 1
          }
        }
        else {
          return item
        }
      }).filter((item)=> item.count !== 0)
      return {
        ...state,
        cart: tempcart
      }
    }

    if(action.type === 'CLEAR_CART'){
      return{
        ...state,
        cart: []
      }
    }

    if(action.type === 'GET_TOTALS'){
      const {amount, total} = state.cart.reduce((cartTotal, cartItem)=>{

        const {count, price} = cartItem 

        cartTotal.amount += count
        cartTotal.total += count * price 

        return cartTotal
        
      }, {amount: 0, total: 0})
      return {...state, amount: amount, total: total}
    }

    if(action.type === 'REMOVE_ITEM'){
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
    }

  return state 
}
