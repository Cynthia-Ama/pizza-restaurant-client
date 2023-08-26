import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './Context'
import axios from 'axios'

export default function ModalContainer() {
  const { total } = useGlobalContext()
  const [customername, setcustomername] = useState("")
  const [address, setaddress] = useState("")
  const [phoneNum, setphoneNum] = useState("")
  const method = 0
  const [orderId, setorderId] = useState()
  const [sentData, setsentData] = useState(false)
  const [errorMessage, seterrorMessage] = useState()
 

  async function sendData(){
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/orders`, {customername, address, total, method})
      const data = await res.data 
      const id = data._id
      setorderId(id)
    } catch (error) {
      const message = await error.response.data._message 
      seterrorMessage(message)
    }
  }

  function completeOrder(){
    setsentData(true)
  }

  return (
    <div className="modal">
      <div className='modalContainer'>
        <h2>Your Orders</h2>
        <p>Your total is <span>${total}</span></p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Name Surname</label>
            <input type="text" value={customername} onChange={(e) => setcustomername(e.target.value)} required/>
          </div>
          <div>
            <label>Address</label>
            <textarea value={address}  cols="30" rows="10" onChange={(e) => setaddress(e.target.value)} required></textarea>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" value={phoneNum} onChange={(e) => setphoneNum(e.target.value)} required/>
          </div>
          <button type="submit" onClick={()=>{
            sendData();
            completeOrder()
          }}>Order</button>
        </form>
        {errorMessage && <p className='error-message'>{errorMessage}. <span>Please provide your details</span></p>}
        {sentData &&  <Link to={`/orders/${orderId}`}>Complete your order</Link>}
      </div>
    </div>
  )
}
