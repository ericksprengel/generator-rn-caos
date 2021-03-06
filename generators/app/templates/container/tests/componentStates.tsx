import React from 'react'
import { action } from '@storybook/addon-actions'
import <%= componentName %>, { FormInputStatus, States } from '..'

<% if (states.length > 1) { -%>
const Container: React.FC<{ state: States }> = ({ state }) => (
  <<%= componentName %>
    state={state}
<% for (const containerParam of containerParams) { -%>
    <%- containerParam -%>="<%- containerParam -%>Param"
<% } -%>
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

<% for (const state of states) { -%>
const <%- helpers.getStateComponentNameForStorybook(state) -%>: React.FC = () => <Container state={States.<%- state -%>} />
<% } -%>
<% } else { -%>
const Default: React.FC = () => (
  <<%= componentName %>
    state={States.<%- states[0] -%>}
<% for (const containerParam of containerParams) { -%>
    <%- containerParam -%>="<%- containerParam -%>Param"
<% } -%>
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
