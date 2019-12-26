import React from 'react'
import {
  View,
} from 'react-native'
import {
  Text, FormInput,
} from 'jadd-components'
import {
  Button,
} from 'jadd-components/components/future'
import PropTypes from 'prop-types'
import styles from './styles'

const <%= componentName %> = ({
<% for (const input of inputs) { -%>
  <%- input -%>,
  <%- input -%>Status,
  <%- input -%>Message,
  <%= helpers.getInputCallbackName(input) %>,
<% } -%>
<%= actions.map((action) => '  ' + action + ',\n').join('') -%>
}) => (
  <View style={styles.container}>
    <Text><%= componentName %></Text>
<% for (const input of inputs) { -%>
    <FormInput
      onChangeText={<%= helpers.getInputCallbackName(input) %>}
      value={<%= input %>}
      type="default"
      status={<%= input %>Status}
      message={<%= input %>Message}
      placeholder="<%= input %>"
      label="<%= input %>"
    />
<% } -%>
<% for (const action of actions) { -%>
    <Button
      title="<%= action %>"
      style={styles.button}
      onPress={<%= action %>}
    />
<% } -%>
  </View>
)

<%= componentName %>.defaultProps = {
<% for (const input of inputs) { -%>
  <%- input -%>: '',
  <%- input -%>Status: 'default',
  <%- input -%>Message: '',
<% } -%>
}

<%= componentName %>.propTypes = {
<% for (const input of inputs) { -%>
  <%- input -%>: PropTypes.string,
  <%- input -%>Status: FormInput.propTypes.status,
  <%- input -%>Message: PropTypes.string,
  <%= helpers.getInputCallbackName(input) %>: PropTypes.func.isRequired,
<% } -%>
<% for (const action of actions) { -%>
  <%- action -%>: PropTypes.func.isRequired,
<% } -%>
}

export default <%= componentName %>
