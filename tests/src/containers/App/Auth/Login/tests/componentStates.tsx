import React from 'react'
import { action } from '@storybook/addon-actions'
import Login from '..'

const Default = () => (
  <Login
    email="email bla"
    emailStatus="default"
    emailMessage="message"
    onChangeEmail={action('onChangeEmail')}
    password="password bla"
    passwordStatus="default"
    passwordMessage="message"
    onChangePassword={action('onChangePassword')}
    onLogin={action('onLogin')}
    onBack={action('onBack')}
    onForgotPassword={action('onForgotPassword')}
  />
)

export {
  Default,
}
