/* eslint-disable react/prop-types */
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    // google and github login 
    const googlProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googlProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // update user 
    const userProfileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // log out the user
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // manage user and observe user
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            if (currentUser) {
                const email = { email: currentUser?.email }
                axiosPublic.post('/jwt', email)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
<<<<<<< HEAD
            }
            setLoading(false)
=======
<<<<<<< HEAD
            }
            setLoading(false)
=======
                setLoading(false)
            }
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)


            console.log('current user--->', currentUser);
            return () => {
                return unSubsCribe()
            }
        })
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOutUser,
        userProfileUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;