import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationProp } from 'react-navigation'
import { log } from 'src/utils/native_modules'
import LoginContainer from 'src/containers/App/Auth/Login'

const LOG_TAG = 'App/Auth/Login'

class LoginScreen extends Component {
  state = {
    email: '',
    emailStatus: 'default',
    emailMessage: '',
    password: '',
    passwordStatus: 'default',
    passwordMessage: '',
  }

  onChangeEmail = (email) => {
    log.e(LOG_TAG, 'TODO: Login/email NOT IMPLEMENTED')
    this.setState({
      email,
    })
  }

  onChangePassword = (password) => {
    log.e(LOG_TAG, 'TODO: Login/password NOT IMPLEMENTED')
    this.setState({
      password,
    })
  }


  handleOnLogin = () => {
    log.e(LOG_TAG, 'TODO: Login/onLogin NOT IMPLEMENTED')
  }

  handleOnBack = () => {
    log.e(LOG_TAG, 'TODO: Login/onBack NOT IMPLEMENTED')
  }

  handleOnForgotPassword = () => {
    log.e(LOG_TAG, 'TODO: Login/onForgotPassword NOT IMPLEMENTED')
  }

  render () {
    const {
      email,
      emailStatus,
      emailMessage,
      password,
      passwordStatus,
      passwordMessage,
    } = this.state
    return (
      <LoginContainer
        email={email}
        emailStatus={emailStatus}
        emailMessage={emailMessage}
        onChangeEmail={this.onChangeEmail}
        password={password}
        passwordStatus={passwordStatus}
        passwordMessage={passwordMessage}
        onChangePassword={this.onChangePassword}
        onLogin={this.handleOnLogin}
        onBack={this.handleOnBack}
        onForgotPassword={this.handleOnForgotPassword}
      />
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape(NavigationProp).isRequired,
}

export default LoginScreen
