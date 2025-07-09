import "../styles/Header.css";

function Header() {
    let isLoggedIn = false;

    const login = () => {
        console.log("Login")
    };

    return (
        <div className="header-container">
            <h1>To do list</h1>
            {
                isLoggedIn ? (
                    <div>Is Logged In</div>
                ) : (
                    <div onClick={login}>Login</div>
                )
            }
        </div>
    );
}

export default Header;