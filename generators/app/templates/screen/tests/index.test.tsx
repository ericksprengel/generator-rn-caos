import React from 'react'
import { create, act, ReactTestInstance } from 'react-test-renderer'
import { NavigationStackProp } from 'react-navigation-stack'
import { mock } from 'jest-mock-extended'
import <%= componentName %>Container from 'src/containers/<%= componentPath %>/<%= componentName %>'
import <%= componentName %>Screen from '..'

describe('<%= componentName %>Screen screen', () => {
  const mockNavigate = jest.fn()
  const mockNavigationPop = jest.fn()
  const navigationMock = mock<NavigationStackProp>({
    navigate: mockNavigate,
    pop: mockNavigationPop,
  })

  let containerInstance: ReactTestInstance

  beforeEach(() => {
    mockNavigate.mockClear()
    mockNavigationPop.mockClear()
    containerInstance = create(
      <<%= componentName %>Screen navigation={navigationMock} />,
    ).root.findByType(<%= componentName %>Container)
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
