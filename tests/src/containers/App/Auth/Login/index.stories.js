import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Login from '.'

storiesOf('containers/App/Auth/Login', module)
  .add('default', () => (
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
  ))
