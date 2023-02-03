export const ProductDelete = (data) => {
    console.log(data.name)
    fetch('http://localhost:4444/product/delete',{
        method: 'DELETE', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name:data.name})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}