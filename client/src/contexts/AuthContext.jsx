/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [tokens, setTokens] = useState(() => {
        const tokensState = localStorage.getItem("TOKENS");
        if (tokensState == null) return null;
        return JSON.parse(tokensState);
    });
    const [user, setUser] = useState(() => {
        try {
            const userState = jwt_decode(localStorage.getItem("TOKENS"));
            return userState;
        } catch (error) {
            return null;
        }
    });

    function registerUser(e) {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/api/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
                email: e.target.email.value,
            }),
        }).then(async (response) => {
            const data = await response.json();
            if (response.status === 200) {
                setTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem("TOKENS", JSON.stringify(data));
                window.location.replace("/");
            } else {
                console.log(data);
                alert("Something went wrong!");
            }
        });
    }

    function loginUser(e) {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        }).then(async (response) => {
            const data = await response.json();
            if (response.status === 200) {
                setTokens(data);
                setUser(jwt_decode(data.access));
                localStorage.setItem("TOKENS", JSON.stringify(data));
                window.location.replace("/");
            } else {
                console.log(data);
                alert("Something went wrong!");
            }
        });
    }

    function logoutUser() {
        setTokens(null);
        setUser(null);
        localStorage.removeItem("TOKENS");
        window.location.replace("/login/");
    }

    const contextData = {
        registerUser: registerUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        user: user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthProvider };
