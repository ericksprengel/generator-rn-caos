import React from 'react'

import { create, act, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer'
import { NavigationStackProp } from 'react-navigation-stack'
import { mock } from 'jest-mock-extended'

import { <%= screenName %>Container } from 'src/features/<%= featureName %>/screens/<%= screenName %>/ui'
import { <%= screenName %>Screen } from '..'

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
    renderer = create(<<%= screenName %>Screen navigation={navigationMock} />)
  })

  if (!renderer) {
    throw new Error('renderer not defined')
  }

  return renderer.root.findByType(<%= screenName %>Container)
}

describe('<%= screenName %>Screen screen', () => {
  let containerInstance: ReactTestInstance

  beforeEach(async () => {
    jest.clearAllMocks()

    containerInstance = await getContainerInstance()
  })
<% for (const action of actions) { -%>

  describe('when <%= action %> is called', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.<%- action -%>()
      })
    })
    test('TODO: should do something', () => {
      expect(mockNavigate).toHaveBeenCalledTimes(1)
    })
  })
<% } -%>
<% for (const input of inputs) { -%>

  describe('when changing the <%- input -%> input', () => {
    beforeEach(() => {
      act(() => {
        containerInstance.props.<%= helpers.getInputCallbackName(input) %>('<%- input -%>')
      })
    })
    test('should update <%- input -%> value', () => {
      expect(containerInstance.props.<%- input -%>).toBe('<%- input -%>')
    })
  })
<% } -%>
})
