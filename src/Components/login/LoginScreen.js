import React from 'react'

export const LoginScreen = ({history}) => {

    const btnLogin = () => {
        history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick= { btnLogin }
            >
                Login
            </button>
        </div>
    )
}
