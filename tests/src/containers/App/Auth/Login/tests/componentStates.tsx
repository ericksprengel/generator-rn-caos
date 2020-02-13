import React from 'react'
import { action } from '@storybook/addon-actions'
import Login from '..'

const Default: React.FC = () => (
  <Login
    email="email bla"
    emailStatus="default"
    emailMessage="message"
    onChangeEmail={(): void => action('onChangeEmail')()}
    password="password bla"
    passwordStatus="default"
    passwordMessage="message"
    onChangePassword={(): void => action('onChangePassword')()}
    onLogin={(): void => action('onLogin')()}
    onBack={(): void => action('onBack')()}
    onForgotPassword={(): void => action('onForgotPassword')()}
  />
)

export {
  Default,
}
