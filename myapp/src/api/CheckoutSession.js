const CheckoutSession = async () => { 
    fetch('http://localhost:4444/create-checkout-session',{
      method: 'POST', 
      headers: {'Content-Type':'application/json'},
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
  }; 

export default CheckoutSession; 
