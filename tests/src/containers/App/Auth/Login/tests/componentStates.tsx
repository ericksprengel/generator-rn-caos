import React from 'react'
import { action } from '@storybook/addon-actions'
import Login, { FormInputStatus, State } from '..'

const Default: React.FC = () => (
  <Login
    state={State.default}
    name="nameParam"
    email="email bla"
    emailStatus={FormInputStatus.default}
    emailMessage="message"
    onChangeEmail={(): void => action('onChangeEmail')()}
    password="password bla"
    passwordStatus={FormInputStatus.default}
    passwordMessage="message"
    onChangePassword={(): void => action('onChangePassword')()}
    onLogin={(): void => action('onLogin')()}
    onBack={(): void => action('onBack')()}
    onForgotPassword={(): void => action('onForgotPassword')()}
  />
)
const Loading: React.FC = () => (
  <Login
    state={State.loading}
    name="nameParam"
    email="email bla"
    emailStatus={FormInputStatus.default}
    emailMessage="message"
    onChangeEmail={(): void => action('onChangeEmail')()}
    password="password bla"
    passwordStatus={FormInputStatus.default}
    passwordMessage="message"
    onChangePassword={(): void => action('onChangePassword')()}
    onLogin={(): void => action('onLogin')()}
    onBack={(): void => action('onBack')()}
    onForgotPassword={(): void => action('onForgotPassword')()}
  />
)
const Error: React.FC = () => (
  <Login
    state={State.error}
    name="nameParam"
    email="email bla"
    emailStatus={FormInputStatus.default}
    emailMessage="message"
    onChangeEmail={(): void => action('onChangeEmail')()}
    password="password bla"
    passwordStatus={FormInputStatus.default}
    passwordMessage="message"
    onChangePassword={(): void => action('onChangePassword')()}
    onLogin={(): void => action('onLogin')()}
    onBack={(): void => action('onBack')()}
    onForgotPassword={(): void => action('onForgotPassword')()}
  />
)

export {
  Default,
  Loading,
  Error,
}
