import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { FormInput } from 'jadd-components'
import { Button, Header, Text } from 'src/components'
import Error, { Errors } from 'src/containers/common/Error'
<% if (['default', 'loading', 'genericError', 'networkError'].every(s => states.includes(s))) { -%>
import States from 'src/containers/common/states'
<% } -%>
import styles from './styles'

<% if (['default', 'loading', 'genericError', 'networkError'].every(s => states.includes(s))) { -%>
export { States }
<% } else { -%>
export enum States {
<% for (const state of states) { -%>
  <%- state -%> = '<%- state -%>',
<% } -%>
}
<% } -%>

export enum FormInputStatus {
  default = 'default',
  success = 'success',
  error = 'error',
}

export interface <%= componentName %>Props {
  state: States
<% for (const containerParam of containerParams) { -%>
  <%- containerParam -%>?: string
<% } -%>
<% for (const input of inputs) { -%>
  <%- input -%>?: string
  <%- input -%>Status?: FormInputStatus
  <%- input -%>Message?: string
  <%= helpers.getInputCallbackName(input) %>: (<%- input -%>: string) => void
<% } -%>
<%- actions.map(
  (action) => '  ' + action + ': () => void\n').join('')
-%>
}

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({
  state,
<% for (const containerParam of containerParams) { -%>
  <%- containerParam -%>,
<% } -%>
<% for (const input of inputs) { -%>
  <%- input -%>,
  <%- input -%>Status,
  <%- input -%>Message,
  <%= helpers.getInputCallbackName(input) %>,
<% } -%>
<%= actions.map((action) => '  ' + action + ',\n').join('') -%>
}) => {
  const content = (
    <View style={styles.container}>
      <Text><%= componentName %></Text>
      <Text>State: {state}</Text>
<% for (const containerParam of containerParams) { -%>
      <Text><%- containerParam -%>: {<%- containerParam -%>}</Text>
<% } -%>
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
<% if (states.includes('loading')) { -%>
        disabled={state === States.loading}
        loading={state === States.loading}
<% } -%>
        onPress={<%= action %>}
      />
<% } -%>
    </View>
  )

  const genericError = <Error error={Errors.genericError} />
  const networkError = <Error error={Errors.networkError} />

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="HeaderTitle" />
      {
        {
          [States.default]: content,
          [States.loading]: content,
          [States.genericError]: genericError,
          [States.networkError]: networkError,
        }[state]
      }
    </SafeAreaView>
  )
}

export default <%= componentName %>
