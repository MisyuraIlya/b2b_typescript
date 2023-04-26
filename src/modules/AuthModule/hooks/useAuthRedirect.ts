import { useNavigate } from "react-router-dom";
import { useAuth } from "../constructor";
import { useEffect } from "react";

export const useAuthRedirect = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if(user)
            navigate('/')
    },[user])
}