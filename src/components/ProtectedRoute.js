import React, { Component } from 'react';

import { Route, Redirect } from 'react-router'
import UserAuth from '../util/UserAuth'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      UserAuth.isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default ProtectedRoute;