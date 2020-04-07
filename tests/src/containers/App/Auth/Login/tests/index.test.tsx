import React from 'react'
import { create } from 'react-test-renderer'
import testSnapshots from 'src/test/helpers/testSnapshots'
import { Button } from 'src/components'
import * as states from './componentStates'
import Login, { State } from '..'

describe('Login container', (): void => {
  testSnapshots(states)


  test('onLogin should be called', (): void => {
    const onLogin = jest.fn()
    const actionMessage = 'onLogin'

    const container = create(
      <Login
        state={State.default}
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => undefined}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => undefined}
        onLogin={onLogin}
        onBack={(): void => undefined}
        onForgotPassword={(): void => undefined}
      />
    ).root

    container
      .find(
        (node) => node.type === Button && node.props.title === actionMessage,
      )
      .props.onPress()

    expect(onLogin).toBeCalled()
  })

  test('onBack should be called', (): void => {
    const onBack = jest.fn()
    const actionMessage = 'onBack'

    const container = create(
      <Login
        state={State.default}
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => undefined}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => undefined}
        onLogin={(): void => undefined}
        onBack={onBack}
        onForgotPassword={(): void => undefined}
      />
    ).root

    container
      .find(
        (node) => node.type === Button && node.props.title === actionMessage,
      )
      .props.onPress()

    expect(onBack).toBeCalled()
  })

  test('onForgotPassword should be called', (): void => {
    const onForgotPassword = jest.fn()
    const actionMessage = 'onForgotPassword'

    const container = create(
      <Login
        state={State.default}
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => undefined}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => undefined}
        onLogin={(): void => undefined}
        onBack={(): void => undefined}
        onForgotPassword={onForgotPassword}
      />
    ).root

    container
      .find(
        (node) => node.type === Button && node.props.title === actionMessage,
      )
      .props.onPress()

    expect(onForgotPassword).toBeCalled()
  })
})
