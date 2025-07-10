import { useState } from "react";
import type React from "react";
import "../styles/Login.css";

interface LoginProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginPopup: React.Dispatch<React.SetStateAction<boolean>>
}

type User = {
    username: string,
    password: string,
}

function Login({ setIsLoggedIn, setLoginPopup } : LoginProps) {
    const [formData, setFormData] = useState({
        user: "",
        psw: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLoginBtn = (event: React.MouseEvent) => {
        event.preventDefault();
        // const { user, psw } = formData;
        
        let storage = localStorage.getItem("to-do-list");
        if(!storage) {
            // must register
        } else {
            const todoUsersArray = JSON.parse(storage);
            const currUser = todoUsersArray.find((user: User) => {
                return user.username == formData.user && user.password == formData.psw;
            });
            if(!currUser) {
                // incorrect
            } else {
                // login successful
            }
        }
    };

    const handleRegisterBtn = (event: React.MouseEvent) => {
        event.preventDefault();
        const { user, psw } = formData;
        
        let storage = localStorage.getItem("to-do-list");
        if(!storage) {
            const todoList = {
                [user]: psw,
            };
            localStorage.setItem("to-do-list", JSON.stringify([todoList]));
        } else {
            const todoUsersArray = JSON.parse(storage);
            const newUser = {
                [user]: psw,
            };
            todoUsersArray.push(newUser);
            localStorage.setItem("to-do-list", JSON.stringify(todoUsersArray));
        }
    };

    const handleClose = () => {
        setLoginPopup(false);
    };

    return (
        <div className="popup-form-container">
            <div className="popup">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={handleClose}>X</button>
                </div>
                <form className="form">
                    <div className="input-container">
                        <input type="text" name="user" onChange={handleChange} placeholder="Username"/>
                        <input type="password" name="psw" onChange={handleChange} placeholder="Password"/>
                    </div>
                    <div className="btns-container">
                        <button onClick={handleLoginBtn}>Login</button>
                        <button onClick={handleRegisterBtn}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;