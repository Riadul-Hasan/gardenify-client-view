import React, { createContext, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;