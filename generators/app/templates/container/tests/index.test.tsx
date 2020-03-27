import React from 'react'
import { create } from 'react-test-renderer'
import testSnapshots from 'src/test/helpers/testSnapshots'
import * as states from './componentStates'
import <%= componentName %>, { State } from '..'

describe('<%= componentName %> container', (): void => {
  testSnapshots(states)

<% for (const action of actions) { %>
  test('<%= action %> should be called', (): void => {
    const <%= action %> = jest.fn()
    const actionMessage = '<%= action %>'

    const container = create(
      <<%= componentName %>
        state={State.default}
<% for (const input of inputs) { -%>
        <%- input -%>="<%- input -%> bla"
        <%- input -%>Status="default"
        <%- input -%>Message="message"
        <%= helpers.getInputCallbackName(input) %>={(): void => undefined}
<% } -%>
<% for (const actionI of actions) { -%>
        <%= actionI %>={<%- actionI === action ? actionI : '(): void => undefined' %>}
<% } -%>
      />
    ).root

    container.findByProps({
      title: actionMessage,
    }).props.onPress()

    expect(<%= action %>).toBeCalled()
  })
<% } -%>
})
