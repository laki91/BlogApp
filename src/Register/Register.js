import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import AuthService from '../services/authService'

export default function Register() {

    const [state, setState] = useState({name: '', lastname:'', email: '', pass: ''})

    const history = useHistory();

    const onRegister = () => {
        AuthService.register(state)
            .then(res => {
                if(res.data === true){
                    history.push('/login')
                }else{
                    history.push('/register')
                }
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h3 className='display-4 m-5'>Register</h3>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <input type="text" placeholder='name' className='form-control'
                                onChange={e => setState({...state, name: e.target.value})}
                            /><br/>
                            <input type="text" placeholder='lastname' className='form-control'
                                onChange={e => setState({...state, lastname: e.target.value})}
                            /><br/>
                            <input type="text" placeholder='email' className='form-control'
                                onChange={e => setState({...state, email: e.target.value})}
                            /><br/>
                            <input type="password" placeholder='passwrd' className='form-control'
                                onChange={e => setState({...state, pass: e.target.value})}
                            /><br/>
                            <button onClick={onRegister} className='btn btn-primary form-control'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
