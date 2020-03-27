import React from 'react'
import { action } from '@storybook/addon-actions'
import <%= componentName %>, { FormInputStatus, State } from '..'

<% for (const state of states) { -%>
const <%- helpers.getStateComponentNameForStorybook(state) -%>: React.FC = () => (
  <<%= componentName %>
    state={State.<%- state -%>}
<% for (const input of inputs) { -%>
    <%- input -%>="<%- input -%> bla"
    <%- input -%>Status={FormInputStatus.default}
    <%- input -%>Message="message"
    <%= helpers.getInputCallbackName(input) %>={(): void => action('<%= helpers.getInputCallbackName(input) %>')()}
<% } -%>
<% for (const action of actions) { -%>
    <%= action %>={(): void => action('<%= action %>')()}
<% } -%>
  />
)
<% } -%>

export {
<% for (const state of states) { -%>
  <%- helpers.getStateComponentNameForStorybook(state) -%>,
<% } -%>
}
