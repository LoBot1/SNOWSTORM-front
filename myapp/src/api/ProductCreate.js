export const ProductCreate = (data) => {
    console.log(data.name,data.price,data.description,data.img,data.stock)
    fetch('http://localhost:4444/product/insert',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name:data.name,price:data.price,description:data.description,img:data.img,stock:data.stock})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}