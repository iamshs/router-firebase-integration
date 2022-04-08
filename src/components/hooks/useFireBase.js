import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.int";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    const googleSignOut = () => {
        signOut(auth)
        .then(() => {
           console.log('signout')
        })
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            });

    }

    return {
        user,
        signInWithGoogle,
        googleSignOut,
    }
}

export default useFirebase