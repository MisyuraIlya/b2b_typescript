import Cookies from 'js-cookie';
import { ITokens, IAuthResponse } from '@/models/user.interface';

export const getAccessToken = () => {
    const accessToken = Cookies.get('accessToken')
    return accessToken || null
}

export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}
export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data.data)
    localStorage.setItem('user', JSON.stringify(data.data.user))
}