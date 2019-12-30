import React from 'react'
import { shallow } from 'enzyme'
import testSnapshots from 'src/test/helpers/testSnapshots'
import * as states from './componentStates'
import <%= componentName %> from '..'

describe('<%= componentName %> container', () => {
  testSnapshots(states)

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
