/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../services/api";
import GoogleIcon from '../images/google-icon.png';                              
import { useNavigate } from "react-router-dom";

export default ({ user, setUser }) => {
    const navigate = useNavigate();

    const compStyle = {
        backgroundImage: `url('${GoogleIcon}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    }

    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                console.log(authResult.code);
                const result = await googleAuth(authResult.code);
                console.log(result.data);
                setUser(result.data.data.user);
                localStorage.setItem('user',result.data.data.user.name);
				localStorage.setItem('token',result.data.token);
                alert("successfully logged in");
                navigate('/home');  // Navigate to home after successful login
            } else {
                console.log(authResult);
                throw new Error(authResult);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (
        <button onClick={googleLogin}>
            <div className="flex justify-between gap-4 items-center text-black font-medium bg-white p-2 px-4 md:p-4 md:px-8 rounded-lg shadow-lg">
                <div style={compStyle} className="w-[1.5rem] h-[1.5rem]"></div>
                <div className={`font-semibold text-gray-500`}>Log in with Google</div>
            </div>
            <div className="text-black">
                {user && user.name}
                {user && user.id}
            </div>
        </button>
    );
};
