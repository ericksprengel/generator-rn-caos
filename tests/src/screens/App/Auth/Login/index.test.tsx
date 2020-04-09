import React from 'react'
import { create, act, ReactTestInstance } from 'react-test-renderer'
import { NavigationStackProp } from 'react-navigation-stack'
import { mock } from 'jest-mock-extended'
import LoginContainer from 'src/containers/Auth/Login'
import LoginScreen from '.'

describe('loginScreen screen', () => {
  const mockNavigate = jest.fn()
  const navigationMock = mock<NavigationStackProp>({
    navigate: mockNavigate,
    pop: jest.fn(),
  })
  let containerInstance: ReactTestInstance
  beforeEach(() => {
    navigationMock.navigate.mockClear()
    containerInstance = create(
      <LoginScreen
        navigation={navigationMock}
      />
    ).root.findByType(LoginContainer)
  })

  describe('when onLogin is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onLogin()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })
  describe('when onBack is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onBack()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })
  describe('when onForgotPassword is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onForgotPassword()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })

  describe('when changing the email input', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onChangeEmail('email')
      })
    })
    test('should update email value', () => {
      expect(containerInstance.props.email).toBe('email')
    })
  })
  describe('when changing the password input', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onChangePassword('password')
      })
    })
    test('should update password value', () => {
      expect(containerInstance.props.password).toBe('password')
    })
  })
})
