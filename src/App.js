import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BlogView from './BlogView/BlogView'
import Header from './Header/Header'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import dbBlogs from './DbBlogs/DbBlogs'
import axios from 'axios'

import store from './store'
import { Provider } from 'react-redux'
import User from './User/User'


export default function App() {

    const [state, setState] = useState([
        dbBlogs
    ])

    useEffect(()=> {
        axios.get('/data')
            .then(res => {
                console.log(res.data);
            })
    },[])
    

    return (
        <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route path='/' exact>
                <Home dbBlogs={dbBlogs}  />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
            <Route path='/blog/:id'>
                <BlogView dbBlogs={dbBlogs}  />
            </Route>
            <Route path='/user'>
                <User />
            </Route>
        </BrowserRouter>
        </Provider>
    )
}
