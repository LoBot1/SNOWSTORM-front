
import bcrypt from 'bcrypt'

function hashPassword(dataPassword) {
    const password = bcrypt.hash(dataPassword, 10)
    return password
}

export const SignUpPost = (data) => {
    const password = hashPassword(data.password)
    fetch('http://localhost:4444/user/post',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({firstname:data.firstname,name:data.name,email:data.email,adress:data.adress,password:password})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}