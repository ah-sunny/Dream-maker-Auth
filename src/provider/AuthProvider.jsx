import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthContext =  createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true);


const createUser =(email,password) =>{
    setLoading(true)
    return  createUserWithEmailAndPassword(auth,email,password)
}
const createGoogleUser = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const createGithubUser = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}
const updateUserProfile =(name,photo)=>{
return updateProfile(auth.currentUser,{
    displayName: name, photoURL: photo
});
}



const signIn = (email, password) => {  
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}
const logOut = () => {
    setLoading(true)
    return signOut(auth);
}



useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return () => {
        unSubscribe();
    }
}, [])



    const authInfo ={ user,loading,createUser,createGoogleUser,createGithubUser,signIn,logOut,updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;