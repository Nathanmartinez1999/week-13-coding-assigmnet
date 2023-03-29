import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefult();
        console.log(email);
    }


    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Create An Account Here</h3>
                <label className="password-label" htmlFor="name">Full-Name</label>
                <input value={name} name="name" id="name" placeholder="Full Name" />
                <label className="password-label" htmlFor="email">email</label>
                <input value={email} type="email" placeholder="your,email@yahoo.com" id="email" name="email" />
                <label className="password-label" htmlFor="password">password</label>
                <input value={password} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit" >Log IN</button>
            </form>
            <button onClick={() => props.onFormSwitch("login")}>Already Have An Account, Sign In Here</button>
        </div>
    )
}