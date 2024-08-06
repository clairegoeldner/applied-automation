import { useState } from "react";
import "../../styles/Forms.css";
import { GetToken } from "../../utils/ApiUtil";

export default function AdminLogin() {
    let [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

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
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="inset-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value); setResult("");}} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value); setResult("");}} required />
                <button type="submit">Login</button>
                {
                    (result) ?
                        <p className="error">{result}</p>
                        : <></>
                }
            </form>
        </>
    )
}