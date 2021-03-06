import React from 'react';
import useFirebase from '../hooks/useFireBase';
import './LogIn.css'

const LogIn = () => {
    const{signInWithGoogle} = useFirebase()
    return (
        <div className='form'>
              <button onClick={signInWithGoogle}>Google SignUp</button>
           <form>
                <input type="email" placeholder='Your Email' name="" id="" />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="LogIn" />

            </form>
        </div>
    );
};

export default LogIn;