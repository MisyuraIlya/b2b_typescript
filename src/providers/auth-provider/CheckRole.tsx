import React, {FC, PropsWithChildren} from 'react'
import { TypeComponentAuthFileds } from './auth-page.types'
import { useAuth } from '@/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFileds>> = 
({Component: { isOnlyUser }, children}) => {

    const {user} = useAuth() 
    const navigate = useNavigate()
    const location = useLocation()

    if (user && isOnlyUser) return <>{children}</>
    
    location.pathname !== '/auth' && navigate('/auth')    
    return null

}

export default CheckRole