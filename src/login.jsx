import { useState } from 'react';
import "./login.css"


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(username, password);
    };

    // const divStyle = {
    //     background-color: "#282c34",
    //     min-height: "100vh",
    //     display: "flex",
    //     flex-direction: "column",
    //     align-items: "center",
    //     justify-content: "center",
    //     font-size: "calc(10px + 2vmin)",
    //     color: "rgba(82, 235, 255, 0)"
    // };

    return (
        <>
            <section className="Login">
                <div>
                    <form onSubmit={printValues}>
                        <label> Customer Username:</label>
                        <input name="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />

                        <label> Customer Password: </label>
                        <input type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;