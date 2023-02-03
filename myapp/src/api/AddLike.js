export const AddLike = (data) => {
    fetch('http://localhost:4444/like/update-insert',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({id_product:data})
    })
}


