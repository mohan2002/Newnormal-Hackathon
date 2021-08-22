import React, { useContext, useEffect, useState } from 'react'
import {auth} from './firebase/firebase'
import firebase from './firebase/firebase'
const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] = useState()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    
    function googleMethod(){
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(GoogleProvider)
    }
    function logout(){
        return auth.signOut()
    }
    function facebookMethod(){
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(facebookProvider)
    }
    function githubMethod(){
        const GithubProvider = new firebase.auth.GithubAuthProvider();
        return firebase.auth().signInWithPopup(GithubProvider).then((res)=>{
            return res.user;
            console.log(res.user);
        }) 
        .catch((er) => {
            return er;
        })
    }
    const value = {
        googleMethod,
        facebookMethod,
        githubMethod,
        logout,
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

