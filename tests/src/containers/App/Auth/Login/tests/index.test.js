import React from 'react'
import { shallow } from 'enzyme'
import testSnapshots from 'src/test/helpers/testSnapshots'
import * as states from './componentStates'
import Login from '..'

describe('Login container', () => {
  testSnapshots(states)


  test('onLogin should be called', () => {
    const onLogin = jest.fn()
    const actionMessage = 'onLogin'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={() => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={() => null}
        onLogin={onLogin}
        onBack={() => null}
        onForgotPassword={() => null}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onLogin).toBeCalled()
  })

  test('onBack should be called', () => {
    const onBack = jest.fn()
    const actionMessage = 'onBack'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={() => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={() => null}
        onLogin={() => null}
        onBack={onBack}
        onForgotPassword={() => null}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onBack).toBeCalled()
  })

  test('onForgotPassword should be called', () => {
    const onForgotPassword = jest.fn()
    const actionMessage = 'onForgotPassword'

    const wrapper = shallow(
      <Login
        email="email bla"
        emailStatus="default"
        emailMessage="message"
        onChangeEmail={() => null}
        password="password bla"
        passwordStatus="default"
        passwordMessage="message"
        onChangePassword={() => null}
        onLogin={() => null}
        onBack={() => null}
        onForgotPassword={onForgotPassword}
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(onForgotPassword).toBeCalled()
  })
})
