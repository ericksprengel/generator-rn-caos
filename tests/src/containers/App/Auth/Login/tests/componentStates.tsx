import React from 'react'
import { action } from '@storybook/addon-actions'
import Login, { FormInputStatus, States } from '..'

const Container: React.FC<{ state: States }> = ({ state }) => (
  <Login
    state={state}
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

const Default: React.FC = () => <Container state={States.default} />
const Loading: React.FC = () => <Container state={States.loading} />
const GenericError: React.FC = () => <Container state={States.genericError} />
const NetworkError: React.FC = () => <Container state={States.networkError} />

export {
  Default,
  Loading,
  GenericError,
  NetworkError,
}
