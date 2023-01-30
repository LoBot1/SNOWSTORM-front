// import React, { useState } from "react"; 
// import "bootstrap/dist/css/bootstrap.min.css"; 
// import Button from "react-bootstrap/Button"; 
// import Card from "react-bootstrap/Card"; 
// import CheckoutSession from "../api/CheckoutSession"; 

 
// function StripePayment() { 

//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:4444/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);
 
//   return <> 
  
  
  
  
  
  
  
  
  
//   </> 
// }  
// export default StripePayment; 





// // const [product, setProduct] = useState({ 
// //   name: "Go FullStack with KnowledgeHut", 
// //   price: 1000, 
// //   productOwner: "KnowledgeHut", 
// //   description: 
// //     "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.", 
// //   quantity: 1, 
// // }); 

// // return ( <> <div className="product">
// //       <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments"/>
// //       <div className="description">
// //       <h3>Stubborn Attachments</h3>
// //       <h5>$20.00</h5>
// //       </div>
// //   </div>

// //   <form action={CheckoutSession()} method="POST">
// //       <button type="submit">
// //       Checkout
// //       </button>
// //   </form>
  
// // </>