export const SignUpPost = (data) => {
    fetch('http://localhost:4444/user/post',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({firstname:data.firstname,name:data.name,email:data.email,adress:data.adress,password:data.password})
    })
}


