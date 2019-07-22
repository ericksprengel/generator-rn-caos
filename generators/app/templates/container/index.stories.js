import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import <%= componentName %> from '.'

storiesOf('<%= componentName %> page', module)
  .add('default', () => (
    <<%= componentName %>
<% for (const action of actions) { -%>
      <%= action %>={action('<%= action %>')}
<% } -%>
    />
  ))
