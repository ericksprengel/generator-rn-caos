import React from 'react'
import { create, act, ReactTestInstance } from 'react-test-renderer'
import <%= componentName %>Container from 'src/containers/Auth/<%= componentName %>'
import <%= componentName %>Screen from '.'

describe('<%= componentName.toLowerCase() %>Screen screen', () => {
  const navigationMock = {
    navigate: jest.fn()
  }
  let containerInstance: ReactTestInstance
  beforeEach(() => {
    navigationMock.navigate.mockClear()
    containerInstance = create(
      <<%= componentName %>Screen
        navigation={navigationMock}
      />
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
      expect(navigationMock.navigate).not.toHaveBeenCalled()
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
