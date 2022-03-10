import React from 'react'

import { create, act, ReactTestInstance } from 'react-test-renderer'
import { NavigationStackProp } from 'react-navigation-stack'
import { mock } from 'jest-mock-extended'

import { <%= screenName %>Container } from 'src/features/<%= featureName %>/screens/<%= screenName %>/ui'
import { <%= screenName %>Screen } from '..'

describe('<%= screenName %>Screen screen', () => {
  const mockNavigate = jest.fn()
  const mockNavigationPop = jest.fn()
  const navigationMock = mock<NavigationStackProp>({
    navigate: mockNavigate,
    pop: mockNavigationPop,
  })

  let containerInstance: ReactTestInstance

  beforeEach(() => {
    jest.clearAllMocks()
    containerInstance = create(
      <<%= screenName %>Screen navigation={navigationMock} />,
    ).root.findByType(<%= screenName %>Container)
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
