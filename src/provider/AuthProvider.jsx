import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // signIn User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => [
            unsubscribe()
        ]
    }, [auth])
    const logOut = () => {
        return signOut(auth)
    }
    // info update
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;