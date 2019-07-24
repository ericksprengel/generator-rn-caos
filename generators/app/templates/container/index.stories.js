import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import <%= componentName %> from '.'

storiesOf('containers/<%= componentPath %>/<%= componentName %>', module)
  .add('default', () => (
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
  ))
