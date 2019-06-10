import React, { Component } from 'react';

import { Route, Redirect } from 'react-router'
import Auth from '../util/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Auth.isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default ProtectedRoute;