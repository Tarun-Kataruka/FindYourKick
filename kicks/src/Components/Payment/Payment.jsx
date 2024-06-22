import React,{useState,useEffect} from 'react'
import DropIn from 'braintree-web-drop-in-react'


const Payment = () => {
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState('');
  const [loading, setLoading] = useState(false);
  const getToken = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/product/braintree/token")
      if(!response.ok){
        throw new Error('Failed to get token')
      }
      const data = await response.json()
      setClientToken(data.clientToken)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getToken()
  }, [])

  const handlePayment = async () => {
    if(!instance){
      console.log('No instance')
      return
    }
    try {
      setLoading(true)
      const {nonce} = await instance.requestPaymentMethod();
      const {data} = await fetch("http://localhost:4000/api/v1/product/braintree/payment",{
        nonce, cart
      }) 
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {clientToken &&(
    <DropIn
    options={{ authorization: clientToken,
    paypal:{
      flow: 'vault'
    }
  }}
    onInstance={(instance) => setInstance(instance)}  
    />
      )}
    <button onClick={handlePayment} className='btn btn-primary' disabled={clientToken || !loading || !instance}>Make Payment</button>
    </div>
  )
}

export default Payment