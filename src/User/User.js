import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeUser, setUser } from '../Login/store/actions'
import AuthService from '../services/authService'

export default function User() {

    const userStore = useSelector(store => store.userStore)
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(()=> {
        if(AuthService.getUserData() === null){
            history.push('/login')
        }
        if(userStore){
            dispatch(setUser(AuthService.getUserData())) 
        }
    }, [])

    const onLogout = () => {
        AuthService.logout(history)
        dispatch(removeUser())
    }
    
    return (
        <div className="container">
            <h1>User Page</h1>
            <h2>Hello {userStore.name}</h2>
            <button className='btn btn-warning' onClick={onLogout}>Logout</button>
        </div>
        
    )
}
