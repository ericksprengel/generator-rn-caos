import React from 'react'
import { shallow } from 'enzyme'
import testSnapshots from 'src/test/helpers/testSnapshots'
import * as states from './componentStates'
import Login from '..'

describe('Login container', (): void => {
  testSnapshots(states)


  test('onLogin should be called', (): void => {
    const onLogin = jest.fn()
    const actionMessage = 'onLogin'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => null}
        onLogin={onLogin}
        onBack={(): void => null}
        onForgotPassword={(): void => null}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onLogin).toBeCalled()
  })

  test('onBack should be called', (): void => {
    const onBack = jest.fn()
    const actionMessage = 'onBack'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => null}
        onLogin={(): void => null}
        onBack={onBack}
        onForgotPassword={(): void => null}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onBack).toBeCalled()
  })

  test('onForgotPassword should be called', (): void => {
    const onForgotPassword = jest.fn()
    const actionMessage = 'onForgotPassword'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={(): void => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={(): void => null}
        onLogin={(): void => null}
        onBack={(): void => null}
        onForgotPassword={onForgotPassword}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onForgotPassword).toBeCalled()
  })
})
