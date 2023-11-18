import React, { useState } from "react";


const Login =()=>{

    const [user,setUser] = useState({email:"",password:"",name:""})
    console.log(user)
    console.log(setUser)
    
    


    return(
        <div>
           <form>
            <label>name</label><br />
            <input type="text" placeholder="enter your name" /><br />
            <label>email</label><br />
            <input type="email" placeholder="enter email" /><br />
            <label>password</label><br />
            <input type="password" /><br />
           </form>

        </div>
    )
}
export default Login