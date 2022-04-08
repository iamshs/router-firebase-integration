import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='form'>
          
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' name="" id="" />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;