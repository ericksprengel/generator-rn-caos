import React from 'react'
import {
  View,
} from 'react-native'
import {
  FormInput,
} from 'jadd-components'
import {
  Button,
  Text,
} from 'src/components'
import styles from './styles'

export enum FormInputStatus {
  default = 'default',
  success = 'success',
  error = 'error',
}

export enum State {
  default = 'default',
  loading = 'loading',
  error = 'error',
}

export interface <%= componentName %>Props {
  state: State;
<% for (const input of inputs) { -%>
  <%- input -%>?: string;
  <%- input -%>Status?: FormInputStatus;
  <%- input -%>Message?: string;
  <%= helpers.getInputCallbackName(input) %>: (<%- input -%>: string) => void;
<% } -%>
<%- actions.map(
  (action) => '  ' + action + ': () => void;\n').join('')
-%>
}

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({
  state,
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
    <Text>State: {state}</Text>
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
      loading={state === State.loading}
      onPress={<%= action %>}
    />
<% } -%>
  </View>
)

export default <%= componentName %>
