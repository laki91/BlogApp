import React, { useState } from 'react'
import AuthService from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions'
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [state, setState] = useState({name: '', pass: ''});
    const dispatch = useDispatch()
    const history = useHistory()
    
    const onLogin = () => {
        AuthService.login(state)
            .then(res => {
                AuthService.storeUserData(res.data);
                dispatch(setUser(res.data))
                if(res.data){
                    history.push('/login')
                    
                }
                history.push('/user')
                
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h3 className='display-4 m-5'>Join now</h3>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <input type="text" placeholder='email' className='form-control'
                                onChange={e => setState({...state, email: e.target.value})}
                            /><br/>
                            <input type="password" placeholder='password' className='form-control'
                                onChange={e => setState({...state, pass: e.target.value})}
                            /><br/>
                            <button onClick={onLogin} className='btn btn-info form-control'>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
