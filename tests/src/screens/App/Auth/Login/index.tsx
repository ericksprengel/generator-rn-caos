import React, { Component } from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import routes from 'src/navigation/routes'
import { log } from 'src/utils/native_modules'
import LoginContainer from 'src/containers/App/Auth/Login'

const LOG_TAG = 'App/Auth/Login'

export interface Props {
  navigation: NavigationStackProp;
}

class LoginScreen extends Component<Props> {
  state = {
    email: '',
    emailStatus: 'default',
    emailMessage: '',
    password: '',
    passwordStatus: 'default',
    passwordMessage: '',
  }

  onChangeEmail = (email): void => {
    log.e(LOG_TAG, 'TODO: Login/email NOT IMPLEMENTED')
    this.setState({
      email,
    })
  }

  onChangePassword = (password): void => {
    log.e(LOG_TAG, 'TODO: Login/password NOT IMPLEMENTED')
    this.setState({
      password,
    })
  }


  handleOnLogin = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onLogin NOT IMPLEMENTED')
  }

  handleOnBack = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onBack NOT IMPLEMENTED')
  }

  handleOnForgotPassword = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onForgotPassword NOT IMPLEMENTED')
  }

  render (): React.ReactNode {
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

export default LoginScreen
