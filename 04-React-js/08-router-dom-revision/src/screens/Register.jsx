import React, { useRef } from 'react'

const Register = () => {
    const email = useRef()
    const password = useRef()
    return (
        <>
            <form>
                <input type="email" placeholder='email' ref={email} />
                <input type="password" placeholder='password' ref={password} />

            </form>
        </>
    )
}

export default Register







// login and signup using firebase authentication.
//home page pa product show nahi hoga agar user login nahi ha.



// protected routes
// firestore + todoapp
// redux-toolkit 











