import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const ProtectedRoutes = ({ component }) => {
    const [isUser, setIsUser] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                setIsUser(true);
            } else {
                console.log('user not logged in');
                navigate('/login')
            }
        });
    }, [])
    return (
        isUser ? component : <Typography>Loading...</Typography>
        
    )
}

export default ProtectedRoutes