// Global
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
import { API_BACKEND } from '../constructor';
import { onSuccessAlert } from '../constructor';

interface AuthContextType {
  AuthMethods: {
    ValidationRequest: () => void;
    RegistrationRequest: () => void;
    LoginRequest: () => void;
    TwoFactor: () => void;
  };
  loading: boolean;
  allowRegister: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// React hook
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Can not run without "AuthProvider"');
  }
  return context;
};

interface AuthProviderProps {
    children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  // state
  const [loading, setLoading] = useState(false);
  const [allowRegister, setAllowRegister] = useState(false);

  // Helpers
  const ValidationRequest = async () => {
    const postData = {
      classPoint: 'AuthController',
      funcName: 'Validation',
      val: {
        email: 'test@gmail.comm',
        password: '123',
      },
    };
    try {
      const data = axios.post(API_BACKEND, postData)
      onSuccessAlert('Success', 'Registration Successss');
      setAllowRegister(true)
    } catch(e) {
      console.log('e',e)
    } finally {

    }
  }

  const RegistrationRequest = async () => {
    const postData = {
      classPoint: 'AuthController',
      funcName: 'Registration',
      val: {
          userExId: '1',
          name: 'ilya',
          email: 'tes',
          phone: '0503036307',
          password: '123'
        }
    };

    try{ 
      const data = axios.post(API_BACKEND, postData)
      onSuccessAlert('Success','Registration Successss')
    } catch(e) {
      console.log(e)
    } finally {

    }
  }

  const LoginRequest = async () => {
    const postData = {
      classPoint: 'AuthController',
      funcName: 'SignIn',
      val: {
          email:"test@gmail.com",
          password:"123"
        }
    };
    try {
      const data = await axios.post(API_BACKEND, postData)
      const accessToken = data.data.data.accessToken;
      const refreshToken = data.data.data.refreeshToken;
      debugger
      document.cookie = `access_token=${accessToken}; path=/;`;
      document.cookie = `refresh_token=${refreshToken}; path=/;`;
    } catch (e) {
      console.log(e)
    } finally {

    }
  }

  const TwoFactor = async () => {
    const postData = {
      classPoint: 'AuthController',
      funcName: 'TwoFactor',
      val: {
          TwoFactor:"123"
        }
    };
    try {
      const data = axios.post(API_BACKEND, postData)
    } catch (e) {
      console.log(e)
    } finally {

    }
  }

  // Exports
  const AuthMethods = {
    ValidationRequest,
    RegistrationRequest,
    LoginRequest,
    TwoFactor
  };
  const value: AuthContextType = {
    AuthMethods,
    loading,
    allowRegister
  };

  return <AuthContext.Provider value={value} {...props} />;
};

export { useAuth, AuthProvider };
