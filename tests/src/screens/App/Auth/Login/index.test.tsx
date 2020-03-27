import React from 'react'
import { create, act, ReactTestInstance } from 'react-test-renderer'
import LoginScreen from '.'

describe('login screen', () => {
  const navigationMock = {
    navigate: jest.fn()
  }
  let testInstance: ReactTestInstance
  beforeEach(() => {
    navigationMock.navigate.mockClear()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    testInstance = create(
      <LoginScreen
        navigation={navigationMock}
      />
    )!.root
  })

  describe('when pressing the login button', () => {
    beforeEach(() => {
      const button = testInstance.findByProps({ title: 'onLogin' })
      act(() => {
        button.props.onPress()
      })
    })
    test('should do something', () => {
      expect(navigationMock.navigate).not.toHaveBeenCalled()
    })
  })

  describe('when pressing the back button', () => {
    beforeEach(() => {
      const button = testInstance.findByProps({ title: 'onBack' })
      act(() => {
        button.props.onPress()
      })
    })
    test('should do something', () => {
      expect(navigationMock.navigate).not.toHaveBeenCalled()
    })
  })

  describe('when pressing the forgot password button', () => {
    beforeEach(() => {
      const button = testInstance.findByProps({ title: 'onBack' })
      act(() => {
        button.props.onPress()
      })
    })
    test('should do something', () => {
      expect(navigationMock.navigate).not.toHaveBeenCalled()
    })
  })

  describe('when pressing the back button', () => {
    beforeEach(() => {
      const button = testInstance.findByProps({ title: 'onBack' })
      act(() => {
        button.props.onPress()
      })
    })
    test('should do something', () => {
      expect(navigationMock.navigate).not.toHaveBeenCalled()
    })
  })

  describe('when changing the email input', () => {
    let input
    beforeEach(() => {
      input = testInstance.findByProps({ label: 'email' })
      act(() => {
        input.props.onChange('email')
      })
    })
    test('should do something', () => {
      expect(input.props.value).toBe('email')
    })
  })

  describe('when changing the password input', () => {
    let input
    beforeEach(() => {
      input = testInstance.findByProps({ label: 'password' })
      act(() => {
        input.props.onChange('password')
      })
    })
    test('should do something', () => {
      expect(input.props.value).toBe('password')
    })
  })
})
