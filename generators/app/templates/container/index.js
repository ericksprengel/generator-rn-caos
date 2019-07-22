import React from 'react'
import {
  View,
} from 'react-native'
import {
  Text,
} from 'jadd-components'
import {
  Button,
} from 'jadd-components/components/future'
import PropTypes from 'prop-types'
import styles from './styles'

const <%= componentName %> = ({
  <%= actions.join(',\n  ')%>
}) => (
  <View style={styles.container}>
    <Text><%= componentName %></Text>
<% for (const action of actions) { -%>
    <Button
      title="<%= action %>"
      onPress={<%= action %>}
    />
<% } -%>
  </View>
)

<%= componentName %>.propTypes = {
<% for (const action of actions) { -%>
  <%- action -%>: PropTypes.func.isRequired,
<% } -%>
}

export default <%= componentName %>
