import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { FormInput } from 'jadd-components'

import Error, { Errors } from 'src/containers/common/Error'
import { Button, Header, Text } from 'src/components'

import States from 'src/containers/common/states'
import styles from './styles'

export { States }

export enum FormInputStatus {
  default = 'default',
  success = 'success',
  error = 'error',
}

export interface LoginContainerProps {
  state: States
  name?: string
  email?: string
  emailStatus?: FormInputStatus
  emailMessage?: string
  onChangeEmail: (email: string) => void
  password?: string
  passwordStatus?: FormInputStatus
  passwordMessage?: string
  onChangePassword: (password: string) => void
  onLogin: () => void
  onBack: () => void
  onForgotPassword: () => void
}

export const LoginContainer: React.FC<LoginContainerProps> = ({
  state,
  name,
  email,
  emailStatus,
  emailMessage,
  onChangeEmail,
  password,
  passwordStatus,
  passwordMessage,
  onChangePassword,
  onLogin,
  onBack,
  onForgotPassword,
}) => {
  const renderContent = (): React.ReactElement => (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>State: {state}</Text>
      <Text>name: {name}</Text>
      <FormInput
        onChangeText={onChangeEmail}
        value={email}
        type="default"
        status={emailStatus}
        message={emailMessage}
        placeholder="email"
        label="email"
      />
      <FormInput
        onChangeText={onChangePassword}
        value={password}
        type="default"
        status={passwordStatus}
        message={passwordMessage}
        placeholder="password"
        label="password"
      />
      <Button
        title="onLogin"
        buttonStyle={styles.button}
        disabled={state === States.loading}
        loading={state === States.loading}
        onPress={onLogin}
      />
      <Button
        title="onBack"
        buttonStyle={styles.button}
        disabled={state === States.loading}
        loading={state === States.loading}
        onPress={onBack}
      />
      <Button
        title="onForgotPassword"
        buttonStyle={styles.button}
        disabled={state === States.loading}
        loading={state === States.loading}
        onPress={onForgotPassword}
      />
    </View>
  )

  const renderGenericError = (): React.ReactElement => (
    <Error error={Errors.genericError} onRetry={(): void => undefined} />
  )

  const renderNetworkError = (): React.ReactElement => (
    <Error error={Errors.networkError} onRetry={(): void => undefined} />
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="HeaderTitle" />
      {
        {
          [States.default]: renderContent(),
          [States.loading]: renderContent(),
          [States.genericError]: renderGenericError(),
          [States.networkError]: renderNetworkError(),
        }[state]
      }
    </SafeAreaView>
  )
}
