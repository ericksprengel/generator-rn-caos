import React from 'react'
import {
  View,
} from 'react-native'
import {
  FormInput,
} from 'jadd-components'
import {
  Text,
} from 'src/components'
import {
  Button,
} from 'jadd-components/components/future'
import styles from './styles'

export interface <%= componentName %>Props {
<% for (const input of inputs) { -%>
  <%- input -%>?: string;
  <%- input -%>Status?: 'default' | 'success' | 'error';
  <%- input -%>Message?: string;
  <%= helpers.getInputCallbackName(input) %>: (<%- input -%>: string) => void;
<% } -%>
<%- actions.map(
  (action) => '  ' + action + ': () => void;\n').join('')
-%>
}

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({
<% for (const input of inputs) { -%>
  <%- input -%>,
  <%- input -%>Status,
  <%- input -%>Message,
  <%= helpers.getInputCallbackName(input) %>,
<% } -%>
<%= actions.map((action) => '  ' + action + ',\n').join('') -%>
}: <%= componentName %>Props) => (
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

export default <%= componentName %>
