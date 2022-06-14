import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthUserContextProvider';



export default function ProtectedRoutes({component:Component, ...rest}) {

  const { authUser } = useAuthContext()

    return (
        <Route {...rest} render={({location}) => {
            return authUser.status ? <Component /> : 
            <Redirect to={{
                pathname:'/login',
                state:{ from:location }
            }} />
        }} />
    )
}


