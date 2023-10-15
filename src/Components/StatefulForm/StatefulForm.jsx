import { useState } from "react";

const StatefulForm = () => {
    //set state for all input type
    // const [name, setName] = useState(null);
    const [name, setName] = useState("methela");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    //overall form event handler
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be 6 characters or larger')
        }
        else{
            setError('');
            console.log(name, email, password)
        }
        

    }
    //event handler only for name field
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    //event handler only for email field
    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value)
    }
    //event handler only for password field
    const handlePasswordChange = e =>{
        // console.log(e.target.value)
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} 
                type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email" id=""  required/>
                <br />
               <input onChange={handlePasswordChange} 
               type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;