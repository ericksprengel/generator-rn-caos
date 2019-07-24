import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import <%= componentName %> from '.'

describe('<%= componentName %> container', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <<%= componentName %>
<% for (const input of inputs) { -%>
        <%- input -%>="<%- input -%> bla"
        <%- input -%>Status="default"
        <%- input -%>Message="message"
        <%= helpers.getInputCallbackName(input) %>={() => null}
<% } -%>
<% for (const action of actions) { -%>
        <%= action %>={() => null}
<% } -%>
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

<% for (const action of actions) { %>
  test('<%= action %> should be called', () => {
    const <%= action %> = jest.fn()
    const actionMessage = '<%= action %>'

    const wrapper = shallow(
      <<%= componentName %>
<% for (const input of inputs) { -%>
        <%- input -%>="<%- input -%> bla"
        <%- input -%>Status="default"
        <%- input -%>Message="message"
        <%= helpers.getInputCallbackName(input) %>={() => null}
<% } -%>
<% for (const actionI of actions) { -%>
        <%= actionI %>={<%- actionI === action ? actionI : '() => null' %>}
<% } -%>
      />
    )
    wrapper.find(`Button[title="${actionMessage}"]`).first().props().onPress()

    expect(<%= action %>).toBeCalled()
  })
<% } -%>
})
