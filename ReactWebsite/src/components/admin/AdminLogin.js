import React, { useState } from "react";
import "../../styles/Forms.css";
import { GetToken } from "../../utils/ApiUtil";
import { PacmanLoader } from "react-spinners";

export default function AdminLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const response = await GetToken(username, password);

            if (response) {
                localStorage.setItem("token", response);
                window.location.replace("/admin/home");
            } else {
                setResult("Please check your username and password and try again.");
            }
        } catch (e) {
            setResult("An error occured. Please try again. If the error persists, please notify IT personnel.");
        }

        setIsLoading(false);
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="inset-box">
                <div className="input-box">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={(e) => {setUsername(e.target.value); setResult("");}} required />
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => {setPassword(e.target.value); setResult("");}} required />
                </div>
                <button type="submit">Login</button>
                <PacmanLoader className="loader" color="white" loading={isLoading} />
                {
                    (result) ?
                        <p className="error">{result}</p>
                        : <></>
                }
            </form>
        </>
    );
}