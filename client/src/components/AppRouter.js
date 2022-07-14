import React, { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes'
// import {Context} from '../index'
import { LOGIN_ROUTE } from '../utils/consts';

function AppRouter() {
    // const {user} = useContext(Context)
  return (
    <Routes>
        {/* {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
        )} */}

        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/>
    </Routes>
  )
}

export default AppRouter