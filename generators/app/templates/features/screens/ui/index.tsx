import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { FormInput } from 'jadd-components'

<% if (['genericError', 'networkError'].some(s => states.includes(s))) { -%>
import Error, { Errors } from 'src/containers/common/Error'
<% } -%>
import { Button, Header, Text } from 'src/components'

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

export interface <%= screenName %>ContainerProps {
  state: States
<% for (const uiParam of uiParams) { -%>
  <%- uiParam -%>?: string
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

export const <%= screenName %>Container: React.FC<<%= screenName %>ContainerProps> = ({
  state,
<% for (const uiParam of uiParams) { -%>
  <%- uiParam -%>,
<% } -%>
<% for (const input of inputs) { -%>
  <%- input -%>,
  <%- input -%>Status,
  <%- input -%>Message,
  <%= helpers.getInputCallbackName(input) %>,
<% } -%>
<%= actions.map((action) => '  ' + action + ',\n').join('') -%>
<% if (states.length > 1 && !(states.every(s => ['default', 'loading'].includes(s)))) { -%>
}) => {
  const renderContent = (): React.ReactElement => (
    <View style={styles.container}>
      <Text><%= screenName %></Text>
      <Text>State: {state}</Text>
<% for (const uiParam of uiParams) { -%>
      <Text><%- uiParam -%>: {<%- uiParam -%>}</Text>
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

<% if (states.includes('genericError')) { -%>
  const renderGenericError = (): React.ReactElement => (
    <Error error={Errors.genericError} onRetry={(): void => undefined} />
  )

<% } -%>
<% if (states.includes('networkError')) { -%>
  const renderNetworkError = (): React.ReactElement => (
    <Error error={Errors.networkError} onRetry={(): void => undefined} />
  )

<% } -%>
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="HeaderTitle" />
      {
        {
<% for (const state of states) { -%>
<% if (!['genericError', 'networkError'].includes(state)) { -%>
          [States.<%- state -%>]: renderContent(),
<% } -%>
<% } -%>
<% if (states.includes('genericError')) { -%>
          [States.genericError]: renderGenericError(),
<% } -%>
<% if (states.includes('networkError')) { -%>
          [States.networkError]: renderNetworkError(),
<% } -%>
        }[state]
      }
    </SafeAreaView>
  )
}
<% } else { -%>
}) => (
  <SafeAreaView style={styles.safeArea}>
    <Header title="HeaderTitle" />
    <View style={styles.container}>
      <Text><%= screenName %></Text>
      <Text>State: {state}</Text>
<% for (const uiParam of uiParams) { -%>
      <Text><%- uiParam -%>: {<%- uiParam -%>}</Text>
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
  </SafeAreaView>
)
<% } -%>
