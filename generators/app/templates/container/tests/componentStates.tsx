import React from 'react'
import { action } from '@storybook/addon-actions'
import <%= componentName %> from '..'

const Default = () => (
  <<%= componentName %>
<% for (const input of inputs) { -%>
    <%- input -%>="<%- input -%> bla"
    <%- input -%>Status="default"
    <%- input -%>Message="message"
    <%= helpers.getInputCallbackName(input) %>={action('<%= helpers.getInputCallbackName(input) %>')}
<% } -%>
<% for (const action of actions) { -%>
    <%= action %>={action('<%= action %>')}
<% } -%>
  />
)

export {
  Default,
}
