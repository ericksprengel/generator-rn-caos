import React from 'react'
import { create, act, ReactTestInstance } from 'react-test-renderer'
import <%= componentName %>Screen from '.'

describe('<%= componentName.toLowerCase() %>Screen screen', () => {
  const navigationMock = {
    navigate: jest.fn()
  }
  let testInstance: ReactTestInstance
  beforeEach(() => {
    navigationMock.navigate.mockClear()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    testInstance = create(
      <<%= componentName %>Screen
        navigation={navigationMock}
      />
    )!.root
  })

<% for (const action of actions) { -%>
  describe('when pressing the <%= action %> button', () => {
    beforeEach(() => {
      const button = testInstance.findByProps({ title: '<%= action %>' })
      act(() => {
        button.props.onPress()
      })
    })
    test('should do something', () => {
      expect(navigationMock.navigate).not.toHaveBeenCalled()
    })
  })
<% } -%>

<% for (const input of inputs) { -%>
  describe('when changing the <%- input -%> input', () => {
    let input
    beforeEach(() => {
      input = testInstance.findByProps({ label: '<%- input -%>' })
      act(() => {
        input.props.onChange('<%- input -%>')
      })
    })
    test('should do something', () => {
      expect(input.props.value).toBe('<%- input -%>')
    })
  })
<% } -%>
})
