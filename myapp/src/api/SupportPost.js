export const SupportPost = (data) => {
    fetch('ttp://localhost:4444/support/post',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email:data.email,object:data.object,text:data.text,img:data.img})
    })
}


