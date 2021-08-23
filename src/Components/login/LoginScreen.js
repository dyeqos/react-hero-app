import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext( AuthContext );

    const btnLogin = () => {
        //history.push('/');
        dispatch({
            type: types.login,
            payload:{
                name: 'Dieguito'
            }
        });
        history.replace('/');

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
