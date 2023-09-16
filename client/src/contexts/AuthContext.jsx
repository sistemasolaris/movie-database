/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [tokens, setTokens] = useState(null);
    const [user, setUser] = useState(null);

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
            setTokens(data);
            setUser(jwt_decode(data.access));
        });
    }

    const contextData = {
        loginUser: loginUser,
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
