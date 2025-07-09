import type React from "react";
import { useState } from "react";
import "../styles/Header.css";

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isLoggedIn, setIsLoggedIn }: HeaderProps) {
    const [loginDropdown, setLoginDropdown] = useState(false);

    const handleLoginBtn = () => {
        setLoginDropdown(!loginDropdown);
    }

    return (
        <div className="header-container">
            <div className="header-title">
                <h1>To do list</h1>
            </div>
            <div>
            {
                isLoggedIn ? (
                    <div>
                        User
                    </div>
                ) : (
                    <div onClick={handleLoginBtn}>
                        Login
                    </div>
                )
            }
            {
                loginDropdown && (
                    <div className="login-dropdown-container">
                        Dropdown
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default Header;