import React from 'react'

import { create, act, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer'
import { NavigationStackProp } from 'react-navigation-stack'
import { mock } from 'jest-mock-extended'

import { LoginContainer } from 'src/features/Auth/screens/Login/ui'
import { LoginScreen } from '..'

const mockNavigate = jest.fn()
const mockNavigationGoBack = jest.fn()
const navigationMock = mock<NavigationStackProp>({
  navigate: mockNavigate,
  goBack: mockNavigationGoBack,
})

const getContainerInstance = async (): Promise<ReactTestInstance> => {
  let renderer: ReactTestRenderer | undefined

  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    renderer = create(<LoginScreen navigation={navigationMock} />)
  })

  if (!renderer) {
    throw new Error('renderer not defined')
  }

  return renderer.root.findByType(LoginContainer)
}

describe('LoginScreen screen', () => {
  let containerInstance: ReactTestInstance

  beforeEach(async () => {
    jest.clearAllMocks()

    containerInstance = await getContainerInstance()
  })

  describe('when onLogin is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onLogin()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).toHaveBeenCalledTimes(1)
    })
  })

  describe('when onBack is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onBack()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).toHaveBeenCalledTimes(1)
    })
  })

  describe('when onForgotPassword is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.onForgotPassword()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).toHaveBeenCalledTimes(1)
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
