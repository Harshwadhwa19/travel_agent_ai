import React, { createContext, useState, useContext, useEffect } from 'react';
import apiClient from '../api/apiClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = async (username, password) => {
        const response = await apiClient.post('/auth/login', { username, password });
        const { access_token, user } = response.data;
        setToken(access_token);
        setUser(user);
        localStorage.setItem('token', access_token);
    };

    const signup = async (username, email, password) => {
        await apiClient.post('/auth/signup', { username, email, password });
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
