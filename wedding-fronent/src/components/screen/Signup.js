import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import Select from "react-select";

const Signup = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    const options =[
        {value : 'customer', label:'customer'},
        {value: 'provider', label:'service provider'}
    ]

    const PostData = () => {
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role
            })
        }).then(ress => ress.json())
            .then(data => {
                if (data.message) {
                    M.toast({ html: data.message, classes: "#e53935 red darken-1" })
                } else {
                    M.toast({ html: 'Sighnup Successful', classes: "#43a047 green darken-1" })
                    navigate('/signin')
                }
            })
        // .catch(err=>{
        //     console.log(err);
        // })
    }
    return (
        <div className="mycard">
            <div className='auth-card input-field'>
                <div className="card">
                    <h2>Wedding Planner</h2>
                    <input type="text" placeholder='name' value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} />


                     <label>Select role : </label>
                    <div style={{padding:'10px'}}>
                       
                        <Select
                         menuPortalTarget={document.body} 
                        options={options}
                        onChange={(e) => {console.log(e.value);
                            setRole(e.value)}} 
                        value={options.find(el=> el.role ===role)}    
                        placeholder="Select Role"/>
                          
                    </div>
                    <button onClick={PostData} className="btn waves-effect waves-light #4db6ac teal darken-1">Sign Up
                    </button>
                    <h5 className='p-2'>
                        <Link to="/signin" >Already have an Account ?</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Signup