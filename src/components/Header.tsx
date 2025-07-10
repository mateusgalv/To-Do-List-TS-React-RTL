import type React from "react";
import { useState } from "react";
import "../styles/Header.css";

import Login from "./Login";

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
    const [loginPopup, setLoginPopup] = useState(false);

    const handleLoginBtn = () => {
        if(!loginPopup) setLoginPopup(!loginPopup);
    }

    return (
        <div className="header-container">
            <div className="header-title">
                <h1>To do list</h1>
            </div>
            
            <div className="user-container">
            {
                isLoggedIn ? (
                    <div className="user-circle" onClick={handleLoginBtn}>
                        
                    </div>
                ) : (
                    <div className="user-circle" onClick={handleLoginBtn}>
                        
                    </div>
                )
            }
            {
                loginPopup && (
                    <Login setIsLoggedIn={setIsLoggedIn} setLoginPopup={setLoginPopup}/>
                )
            }
            </div>
        </div>
    );
}

export default Header;