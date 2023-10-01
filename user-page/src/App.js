import { useState } from 'react';
import './App.css';
import logo from "./assets/instagram.png"

function App() {
    const [login, setLogin] = useState(true)

    const loginSwitch = () => {
        setLogin(!login)
    }

    return (
        <div id='container'>

            <div id='user'>
                <img src={logo} alt=''/>

                <input hidden={login} type='text' placeholder='Mobile Number or Email' name='' id=''/>
                <input hidden={login} type='text' placeholder='Full Name' name='' id=''/>
                <input type='email' placeholder='Phone number, username, or email' name='' id=''/>
                <input type='password' placeholder='password' name='' id=''/>

                <button>
                    {login ? "Sign In" : "Sign Up"}
                </button>

                <div id='footer'>
                        {login ? "Don't have account? " : "Have an account "}

                        <span onClick={loginSwitch}>
                            {login ? "Sign Up" : "Sign In"}
                        </span>
                </div>
            </div>

        </div>
    )
}

export default App;
