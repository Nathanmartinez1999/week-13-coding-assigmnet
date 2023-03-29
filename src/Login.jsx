import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefult();
        console.log(email);
    }



    return (
        <div className="auth-form-container">
            <h3>Log In, Here</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="email-label" htmlFor="email">Email</label>
                <input value={email} type="email" placeholder="your,email@yahoo.com" id="email" name="email" />
                <label className="email-label" htmlFor="password">Password</label>
                <input value={password} type="password" placeholder="***********" id="password" name="password" />
                <button type="submit" >Log IN</button>
            </form>
            <button onClick={() => props.onFormSwitch("register")}>Don't Have An Account? Register Here</button>
        </div>
    )
}