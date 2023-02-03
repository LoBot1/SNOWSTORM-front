
export const PasswordUpdate = async (data) => {
    const response = await fetch("http://localhost:4444/password/update",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({repeatpassword:data.repeatpassword,lastpassword:data.lastpassword,password:data.password,email:data.email}),
        }
    )
}





