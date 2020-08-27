import React from 'react'
import { create } from 'react-test-renderer'
import testSnapshots from 'src/test/helpers/testSnapshots'
import { Button, Header } from 'src/components'
import * as states from './componentStates'
import <%= componentName %>, { FormInputStatus, States } from '..'

describe('<%= componentName %> container', (): void => {
  testSnapshots(states)
<% for (const action of actions) { -%>
  
  test('<%= action %> should be called', (): void => {
    const <%= action %> = jest.fn()
    const actionMessage = '<%= action %>'

    const container = create(
      <<%= componentName %>
        state={States.<%- states[0] -%>}
<% for (const containerParam of containerParams) { -%>
        <%- containerParam -%>="<%- containerParam -%>Param"
<% } -%>
<% for (const input of inputs) { -%>
        <%- input -%>="<%- input -%> bla"
        <%- input -%>Status={FormInputStatus.default}
        <%- input -%>Message="message"
        <%= helpers.getInputCallbackName(input) %>={(): void => undefined}
<% } -%>
<% for (const actionI of actions) { -%>
        <%= actionI %>={<%- actionI === action ? actionI : '(): void => undefined' %>}
<% } -%>
      />,
    ).root

    container
      .findByProps({ title: actionMessage })
      .props
      .onPress()

    expect(<%= action %>).toBeCalled()
  })
<% } -%>
})
